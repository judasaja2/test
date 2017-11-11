import React, { Component } from 'react';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Menu = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)
export default Menu
