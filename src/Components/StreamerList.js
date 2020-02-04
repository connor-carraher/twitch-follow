import React, { useState, useEffect } from "react";
import Streamer from "./Streamer.js";
import "./StreamerList.scss";

export default function StreamerList({ username }) {
  const [streamerList, setStreamerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
      headers: {
        "Client-ID": "gin17e5ftuhjetn8nk78xz4oiqzxh7"
      }
    })
      .then(res => res.json())
      .then(res => {
        return res.data[0].id;
      })
      .then(id => {
        fetch(
          `https://api.twitch.tv/helix/users/follows?from_id=${id}&first=100`,
          {
            headers: {
              "Client-ID": "gin17e5ftuhjetn8nk78xz4oiqzxh7"
            }
          }
        )
          .then(res => res.json())
          .then(res => {
            console.log(res);
            setIsLoaded(true);
            setStreamerList(res.data);
          });
      });
  }, []);

  return isLoaded ? (
    streamerList.map(item => (
      <li className="Streamer">
        <Streamer streamer={item} />
      </li>
    ))
  ) : (
    <div>Attempting to load</div>
  );
}
