import React, {useEffect,useState} from 'react';
import LayOut from './components/layOut/LayOut';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

import './App.css';






const theme = createTheme({

  typography: {
      useNextVariants: true,
      fontFamily: ' "Montserrat", Comfortaa',
  },
})

const App = () => {
  

  return (
    <MuiThemeProvider theme={theme}>
      <LayOut/>
    </MuiThemeProvider>
  )
};
export default App;