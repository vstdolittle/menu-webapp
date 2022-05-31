import React from 'react';
import './App.css';
import { MenuConfig } from './models/MenuConfig';

interface MenuProps {
    config: MenuConfig
}

function Menu(props: MenuProps) {
  return (
    <div className="App">
      <header className="App-header">
        {props.config.name}
      </header>
    </div>
  );
}

export default Menu;
