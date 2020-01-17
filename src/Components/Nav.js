import React from "react";
import "./Nav.scss";
import logo from "../public/glitch.jpg";

export default function Nav({ username, setUsername }) {
  return (
    <div className="Nav">
      <button onClick={e => setUsername("")} className="redo-btn">
        <div class="geometry">
          <div class="arrow-round" />
        </div>
      </button>
      <p>Seeing following ages for: {username}</p>
    </div>
  );
}
