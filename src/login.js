import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ redirectToReferrer: window.localStorage.getItem('token') !== null });
  }

  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  componentDidMount() {
    const userData = JSON.parse(window.localStorage.getItem('user_data'));
    if (userData) this.setState({ redirectToReferrer: true });
  }

  handleFormSubmit = event => {
    this.setState({ loading: true });
    fetch('http://www.mocky.io/v2/5c5618f34d000068000fcf0f')
      .then(res => res.json())
      .then(json => {
        window.localStorage.setItem(
          'user_data',
          JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            token: json.Token
          })
        );
        this.setState({ redirectToReferrer: true });
      });

    event.preventDefault();
  };

  render() {
    if (this.state.redirectToReferrer) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <form className="col-4" onSubmit={this.handleFormSubmit}>
            {this.state.loading && (
              <div className="overlay">
                <ClipLoader color={'#123abc'} loading={true} />
              </div>
            )}
            <h3>Iniciar Sesión</h3>
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" value={this.state.username} className="form-control" onChange={this.handleUserChange} />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}
