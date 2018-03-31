import React, { Component } from 'react';
import logo from './images/here_logo.png';
import './App.css';
import List from './components/list.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h3 style={{ textAlign:"center",color:"grey" }}>Applicants</h3>
        <List />
      </div>
    );
  }
}

export default App;
