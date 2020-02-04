import React, { useState, useEffect } from "react";
import "./App.scss";
import StreamerList from "./Components/StreamerList";
import Nav from "./Components/Nav";
import UsernameInput from "./Components/UsernameInput";

function App() {
  const [username, setUsername] = useState("");

  return username ? (
    <div className="App">
      <header className="">
        <Nav username={username} setUsername={setUsername} />
        <div className="Streamer-list">
          <StreamerList username={username} />
        </div>
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <UsernameInput setUsername={setUsername} />
      </header>
    </div>
  );
}

export default App;
