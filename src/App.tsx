import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Context } from "./config/context";
import { wsAnimeUrl } from "./config/baseUrl";

function App() {
  const ws = new WebSocket(`${wsAnimeUrl}/anime/search`);

  return (
    <Context.Provider value={{ ws }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
