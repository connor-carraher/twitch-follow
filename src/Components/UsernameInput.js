import React, { useState, useEffect } from "react";
import "./UsernameInput.scss";
import logo from "../public/twitch.jpg";


export default function UsernameInput({ setUsername }) {
  return (
    <div className="username-input">
      <img src={logo} />
      <form
        onSubmit={e => {
          e.preventDefault();
          setUsername(e.target.username.value);
        }}
      >
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Username" name="username" id='name' required />
          <label for="username" class="form__label">Username</label>
        </div>
        <button type="submit" className="brk-btn">Search</button>
      </form>
    </div>
  );
}
