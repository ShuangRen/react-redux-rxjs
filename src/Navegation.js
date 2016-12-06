import React from 'react';
import { Link } from 'react-router';

export default function Navegation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
      </ul>
    </nav>
  );
}
