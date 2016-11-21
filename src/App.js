import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './Container';
import Home from './Home';
import Logout from './Logout';
import User from './User';
import Login from './Login';

import './App.css';

// TODO separate on a different file
const NotFound = () => <h3>Page not found!</h3>;

export default function App({store}) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Container}>
        <IndexRoute component={Home} />
        <Route path='logout' component={Logout} />
        <Route path='user' component={User} />
      </Route>
      <Route path='/login' component={Login} />
      <Route path='*' component={NotFound} />
    </Router>
  );
}
