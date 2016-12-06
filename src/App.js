import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Container from './Container';
import Home from './Home';
import Logout from './Logout';
import User from './User';
import Login from './Login';
import { isLogged, requireAuth } from './utils/Logged';

import './App.css';

// TODO separate on a different file
const NotFound = () => <h3>Page not found!</h3>;

export default function App({store}) {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Container} onEnter={console.log('Logged:', isLogged())}>
        <IndexRoute component={Home} />
        <Route path='login' component={Login} />
        <Route path='logout' component={Logout} />
        <Route path='user' component={User} onEnter={requireAuth} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  );
}
