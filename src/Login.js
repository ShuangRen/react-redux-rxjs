import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: ""
    }
  }

  render() {
    const { sessionId } = this.state.sessionId;

    return (
      <p>Log in screen</p>
    );
  }
}
