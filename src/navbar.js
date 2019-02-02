import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: true };
  }

  closeSession = e => {
    window.localStorage.removeItem('user_data');
    this.setState({ logged: false });
    e.preventDefault();
  };

  render() {
    if (!this.state.logged) return <Redirect to="/login" />;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          React Test App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.closeSession} href="">
                Cerrar sesión
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <label>
              Usuario: <strong> {this.props.userdata.username}</strong>
            </label>
          </form>
        </div>
      </nav>
    );
  }
}
