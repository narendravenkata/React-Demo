import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is a Sample react application. I want to deploy this app in IIS.Currently I am testing with Jenkins Pipeline.
            Currently I am using webhook to build application only when a commit is made.
        </p>
      </div>
    );
  }
}

export default App;
