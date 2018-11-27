import React, { Component } from 'react';
import logo from './logo.svg';
import Switch from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
           <a>
              My React Native Card counting Machine. 
          </a>
          <div>
             <ul> needs  </a>
                <li> user needs deck id </li>
                <li> connect to card deck api </li>
                <li> semantic cards </li>
                <li> button that draws from deck </li>
                <li> Separate area that does the counting </li>
                <li> get new deck </li>
                <li> image value suit code </li>
             </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
