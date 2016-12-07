import React, { Component } from 'react';
import { requestAuth, isLogged } from './utils/Logged';

class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {
      isLogged: isLogged()
    }
  }

  login() {
    requestAuth('admin', 'changeme');
  }

  render() {
    return (
      <div>
        if (this.state.isLogged) {
          <p>You are logged</p>
        } else {
          <div>
            <p>Click the button to log in</p>
            <button onClick={this.login()}>Login</button>
          </div>
        }
      </div>
    );
  }
}

export default Login;
