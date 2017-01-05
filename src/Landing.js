import React, { Component, PropTypes } from 'react';
import { existSessionId, removeSessionId } from './utils/session';
import Login from './Login';

const LoginForm =() => (
  <div>
    <p>Please log in</p>
    <Login />
  </div>
);

class LoggedLanding extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    removeSessionId();
    this.context.router.push('/');
  }

  render() {
    return (<button onClick={this.handleLogout}>Logout</button>)
  }
}

LoggedLanding.contextTypes = {
  router: PropTypes.object
}

const Landing = () => {
  if (existSessionId()) {
    return <LoggedLanding />
  } else {
    return <LoginForm />
  }
};

export default Landing;
