import React from 'react';
import logo from "./logo.svg";
import {Link} from "react-router-dom";
// import "./App.css";

const Component =()=>{
    return(
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/salutation"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    )
}
export default Component;