import MyRouter from "./Common/MyRouter";
import { Container, ThemeProvider ,CssBaseline,} from '@mui/material';
import theme from "./theme";


function App() {
  return (
 
     <ThemeProvider  theme={theme}>
     <CssBaseline />
      <MyRouter/>
      </ThemeProvider>
     
  );
}

export default App;
