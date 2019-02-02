import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Login from './login';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
