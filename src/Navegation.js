import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';
import { existSessionId } from './utils/session';

class RestrictedLinks extends Component {
  render() {
    if (!existSessionId()) {
      return (
        <Nav pullRight>
          <NavItem>
            <Login />
          </NavItem>
        </Nav>
      );
    }
    return (
      <Nav>
        <LinkContainer to="/app">
          <NavItem eventKey={1}>App</NavItem>
        </LinkContainer>
        <LinkContainer to="/admin">
          <NavItem eventKey={2}>Admin</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem eventKey={3}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}

const Navegation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <RestrictedLinks />
  </Navbar>
);

export default Navegation;
