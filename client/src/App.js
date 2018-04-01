import React, { Component } from 'react';
import logo from './images/here_logo.png';
import './App.css';
import List from './components/list.js'
import ApplicantForm from './components/form.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="body">
          <div className="cell0">
            <h3 style={{ textAlign:"center",color:"grey" }}>New Applicant</h3> 
            <ApplicantForm />
          </div>

          <div className="cell1">
            <h3 style={{ textAlign:"center",color:"grey" }}>Applicants</h3>
            <List />
          </div>  
        </div>

      </div>
    );
  }
}

export default App;
