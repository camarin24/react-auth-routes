import React, { Component } from 'react';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(window.localStorage.getItem('user_data'));
    this.state = { ...userData };
  }

  render() {
    // Implementacion basica de react portals
    // https://reactjs.org/docs/portals.html

    if (this.state.token == undefined) return <Redirect to="/login" />;
    return (
      <div>
        <Navbar userdata={this.state} />
        <div className="container">
          <div className="row justify-content-center">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
