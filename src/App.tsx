import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Menu from './Menu';
import { MENU_WEBAPP_CONFIG } from './Menu/menu_webapp_config';
import { theme }  from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu config={MENU_WEBAPP_CONFIG}/>
    </ThemeProvider>
  );
}

export default App;
