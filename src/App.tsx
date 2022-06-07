import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Menu from './Menu';
import { theme }  from './theme';

const MENU_WEBAPP_CONFIG = {
  restaurant: {
      name: "Burger Kingunn"
  },
  dishes: [
    { 
      "title": "Pedrab",
      "ingredients": [
          "coleslaw"
      ]
   },
  { 
      "title": "Hamburger",
      "ingredients": [
          "fries",
          "salad",
          "buns"
      ]
   },
  { 
      "title": "Hot dogs",
      "ingredients": [
          "dogs",
          "heat"
      ]
   },
  { 
      "title": "Soup",
      "ingredients": [
          "water",
          "cream",
          "bread",
          "butter"
      ]
   },
  ]
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu config={MENU_WEBAPP_CONFIG}/>
    </ThemeProvider>
  );
}

export default App;
