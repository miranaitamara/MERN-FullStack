import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Position from './Position';

class Main extends Component {
  render() {
    return (
      <Switch>
      	 <Route exact path='/' component={Home} />
      	 <Route path='/position' component={Position} />
      </Switch>
    );
  }
}

export default Main;