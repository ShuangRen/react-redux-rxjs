import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

export default function App({value, onIncrement, onDecrement}) {
  console.log(value);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        Save to reload
      </p>
      <Counter
        value={value}
        onIncrement={() =>onIncrement()}
        onDecrement={() => onDecrement()} />
    </div>
  );
}
