import { createTheme } from '@mui/material/styles';
import {Box} from "@mui/material";
import { orange ,purple} from '@mui/material/colors';

const primaryColor = purple[500]
const secoundaryColor = orange[500]
const theme = createTheme({

  palette: {
      background: {
      default: 'white',
      paper: 'white'
    },
    divider: '#E6E8F0',
    primary: {
      main: '#5048E5',
      light: '#828DF8',
      dark: '#3832A0',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#10B981',
      light: '#3FC79A',
      dark: '#0B815A',
      contrastText: '#FFFFFF'
    },

  
  },
  shape: {
    borderRadius: 18
  },
  spacing:8,

  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: 'Roboto',
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
  
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: 1.375
    },
    h2: {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '14px',
      
    },
  
   
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840
    }
  },


   components: {
      MuiButton: {
          defaultProps: {
              variant:"outlined",
            
            },
        styleOverrides: {
          contained: {
          borderRadius: 5,
          height: 30,
          padding: '0 10px',
        }, 
      },
  },
 MuiTextField:{
  defaultProps: {
      margin:"dense",
      variant:"standard",
      fullWidth:true,
    
  }, },
    
  MuiPaper:{
    defaultProps:{
      component:Box,
      p:1,
      
    } 
  },

   
   
    
}});

export default theme;
