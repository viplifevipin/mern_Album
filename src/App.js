import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-pro-sidebar/dist/css/styles.css';
import "./App.css"
import ProtectedRoute from './auth/protect/protect'
import register from "./auth/register"
import login from "./auth/login"
import Home from './auth/home'


class App extends Component {
  render() {
    return (
          <div>
        <Router>

<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{marginTop: 10}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
    <li className="nav-item active ">
        <a className="nav-link text-light" style={{fontFamily:"sans-serif"}} href="/">Register<span class="sr-only">(current)</span></a>
      </li>
    <li className="nav-item active ">
        <a className="nav-link text-light" style={{fontFamily:"sans-serif"}} href="/login">Login<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

        <Route exact path="/"  component={register}/>
        <Route exact path='/register' component={register}/>
        <Route exact path='/login' component={login}/>
        <ProtectedRoute exact path="/home" component={Home}  />
        <ToastContainer />
        </Router>
        </div>
    );
  }
}

export default App;