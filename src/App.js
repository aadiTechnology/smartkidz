import MyRouter from "./Common/MyRouter";
import { Container, ThemeProvider } from '@mui/material';
import theme from "./theme"
// import { makeStyles } from '@mui/styles';
// import { StylesProvider } from '@mui/styles';
function App() {
  return (
    <Container>
      {/* <StylesProvider injectFirst> */}
      <ThemeProvider  theme={theme}>
      <MyRouter/>
      </ThemeProvider>
      {/* </StylesProvider> */}
    </Container>
  );
}

export default App;
