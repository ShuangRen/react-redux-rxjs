import React from 'react';
import { deleteSessionId } from './utils/Logged';

export default function Logout() {
  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={deleteSessionId()}>Logout</button>
    </div>);
}
