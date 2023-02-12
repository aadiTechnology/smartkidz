import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
const theme = createTheme({
   typography: {
       fontFamily:'Roboto'
       },
  
    components: {
        MuiButton: {
            defaultProps: {
                variant:"contained",
                color:"success"
              },
          styleOverrides: {
            contained: {
            borderRadius: 5,
            height: 28,
            padding: '0 10px',
          }, 
        },
    },
   MuiTextField:{
    defaultProps: {
        margin:"dense",
        variant:"standard",
        fullWidth:true,
      
    }, 
    styleOverrides: {
        root: {
     
          }, 
    }, 
    
}



},
    

})
 export default theme;