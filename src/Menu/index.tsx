import React from 'react';
import { MenuConfig } from './models/MenuConfig';

interface MenuProps {
    config: MenuConfig
}

function Menu(props: MenuProps) {
  return (
    <div className="App">
      <header className="App-header">
        {props.config.restaurant.name}
      </header>
    </div>
  );
}

export default Menu;
