import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {
          main: '#174E42',
          light: '#7b9993',
          dark: '#174E42'
        },
        secondary: {
            main:'#7b9993',
            light: '#9cc88d'
        }
    },
    spacing: [0,2,4,8,16,32,64, 128, 256],
    typography: {
        subtitle1: {
            fontSize: 70,
        },
        subtitle2: {
          fontSize: 20,
          color:'#174E42'
        },
        body1: {
            fontWeight: 500,
            fontSize: 16,
            color: '#174E42'
        },
        body2: {
          fontSize: 16,
          color: '#646464'
        },
        h1: {
          fontSize: 26,
          color: '#174E42'
        },
        h2: {
          fontWeight: 'bolder',
          fontSize: 25,
          color: '#174E42'
        },
        h3: {
          fontWeight: 'bolder',
          fontSize: 22,
          color: '#174E42'
        },
        h4: {
           fontWeight: 'bolder',
           fontSize: 18,
           color: '#ffffff' 
        },
        button: {
          fontStyle: 'bold',
          fontWeight: 500,
          fontSize: 14,
          minHeight: 40,
          color: '#174E42'
        },
        overline: {
          fontSize: 14,
          color: '#7b9993'
        }
    },
});