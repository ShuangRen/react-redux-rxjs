import React from 'react';
import { Form,
  FormGroup, FormControl,
  Button } from 'react-bootstrap';

const Login = () => (
  <Form inline onSubmit={(event) => {event.preventDefault(); console.log('onSubmit');}}>
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

export default Login;
