import React, { Component, PropTypes } from 'react';
import { Form,
  FormGroup, FormControl,
  Button } from 'react-bootstrap';
import { setSessionId } from './utils/session';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    setSessionId(`${username}:${password}`);
    this.context.router.push('/');
  }

  render() {
    return (
      <Form inline onSubmit={(event) => this.handleSubmit(event)}>
        <FormGroup controlId="formInlineUsername">
          <FormControl
              type="text"
              placeholder="username" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlinePassword">
          <FormControl
              type="password"
              placeholder="password" />
        </FormGroup>
        {' '}
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
}

export default Login;
