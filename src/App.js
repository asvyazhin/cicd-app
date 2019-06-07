import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="header">
          <div className="App-header">
            <h2>Header</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </header>

        <div className="body">
          <h2>Body</h2>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload!!!!
          </p>
        </div>

        <div className="sidebar">
          <h2>Sidebar</h2>
        </div>
        <footer className="footer">
          <h2>Footer</h2>
        </footer>
      </div>
    );
  }
}

export default App;
