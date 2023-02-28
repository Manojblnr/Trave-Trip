import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from 'components/Navbar';



const theme = createTheme({
  palette: {
    text: {
      primary:'#708238'
    },
    primary:{
      main:'#fff'
    }
  },
  typography: {
    fontFamily:'Poppins',
    h2: {
      fontFamily:'Alex Brush'
    },
    h3: {
      fontFamily:'Alex Brush'
    }

  }
})



function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar/>
    <Container maxWidth='lg'>
      <Component {...pageProps} />
   </Container>
   </ThemeProvider>
}

export default MyApp