import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
