import React from 'react';

export default function Counter({value, onIncrement, onDecrement}) {
    return (
      <div>
        <h2>{value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
}
