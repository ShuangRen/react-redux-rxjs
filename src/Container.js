import React from 'react';
import Header from './Header';
import Navegation from './Navegation';
// import { Counter } from './Counter';

export default function Container({store, children}) {
  return (
    <div>
      <Header />
      <Navegation />
      {children}
    </div>
  );
}

// <Counter
//   value={store.getState()}
//   onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//   onDecrement={() => store.dispatch({type: 'DECREMENT'})} />
