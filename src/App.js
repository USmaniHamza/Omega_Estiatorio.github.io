import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" alt="logo">Welcome to React</h1>
        </header>
          <p className="App-intro"> To get started,
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
      </div>
    );
  } //kono extension kore nai just like in the tutorial
  
}

export default App;
