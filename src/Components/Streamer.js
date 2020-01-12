import React from "react";
import "./Streamer.css";
import moment from "moment";

export default function Streamer({ streamer }) {
  return (
    <div className="Streamer">
      {streamer.to_name}: {moment().diff(streamer.followed_at, "years")} years,{" "}
      {moment().diff(streamer.followed_at, "months") % 12} months,{" "}
      {moment().diff(streamer.followed_at, "days") % 31} days
    </div>
  );
}
