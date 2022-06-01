import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Menu from './Menu';
import { theme }  from './theme';

const MENU_WEBAPP_CONFIG = {
  restaurant: {
      name: "Mc Domas"
  },
  dishes: [
    { 
        title: "Pedrab",
        ingredients : [
            "coleslaw"
        ]
     }
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
