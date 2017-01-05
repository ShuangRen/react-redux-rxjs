import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { existSessionId } from './utils/session';

class RestrictedLinks extends Component {
  render() {
    if (!existSessionId()) {
      return null;
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
        <Link to='/'>React App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <RestrictedLinks />
  </Navbar>
);

export default Navegation;
