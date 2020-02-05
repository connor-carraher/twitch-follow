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
      <p>FOLLOWING AGES FOR: {username}</p>
    </div>
  );
}
