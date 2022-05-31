import React from 'react';
import logo from './logo.svg';
import Menu from './Menu';

const MENU_WEBAPP_CONFIG = {
  restaurant: {
      name: "Mc Domas"
  }
};


function App() {
  return (
    <Menu config={MENU_WEBAPP_CONFIG}/>
  );
}

export default App;
