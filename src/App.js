import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Container from './Container';
import Landing from './Landing';
import Home from './Home';
import Admin from './Admin';
import NotFound from './NotFound';
import { existSessionId, removeSessionId } from './utils/session';

const isUserLogged = (nextState, replace) => {
  if (!existSessionId()) {
    replace('/');
  }
}

const logout = (nextState, replace) => {
  removeSessionId();
  replace('/');
}

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Container}>
        <IndexRoute component={Landing} />
        <Route path='app' component={Home} onEnter={isUserLogged} />
        <Route path='admin' component={Admin} onEnter={isUserLogged} />
        <Route path='logout' onEnter={logout} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  );
}

export default App;
