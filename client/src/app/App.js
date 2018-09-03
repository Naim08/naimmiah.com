import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Routes } from './constants';
import logo from '../logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <Routes />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  </div>
);

export default withRouter(
  connect(
    null,
    null,
  )(App),
);
