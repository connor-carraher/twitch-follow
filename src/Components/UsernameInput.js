import React, { useState, useEffect } from "react";
import "./UsernameInput.css";

export default function UsernameInput({ setUsername }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setUsername(e.target.username.value);
      }}
    >
      Username: <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}
