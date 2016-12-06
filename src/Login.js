import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}
