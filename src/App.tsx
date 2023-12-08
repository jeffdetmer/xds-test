import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { KWThemeProvider } from "@xds-core/theme";
import { Button } from "@xds-react/button";

function App() {
  return (
    <KWThemeProvider theme="light">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button title="Click me" onClick={() => console.log("clicked")} />
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
    </KWThemeProvider>
  );
}

export default App;
