import React from 'react';
import Navegation from './Navegation';

const Container = ({children}) => (
  <div>
    <Navegation />
    {children}
  </div>
);

export default Container;
