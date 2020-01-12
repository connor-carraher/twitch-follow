import React from "react";
import "./Nav.css";
import logo from "../public/glitch.jpg";

export default function Nav({ username, setUsername }) {
  return (
    <div className="Nav">
      <button onClick={e => setUsername("")}>
        <img src={logo} />
      </button>
      <p>Seeing following ages for: {username}</p>
    </div>
  );
}
