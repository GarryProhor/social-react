import React from 'react';
import './assets/css/global.css';
import {Landing} from "./pages/Landing";

import {ThemeProvider, createGlobalStyle} from "styled-components";
import {Theme} from "./utils/GlobalInterfaces";

const theme:Theme = {
  colors:{
    blue: '#1da1f2',
    black: '#14171a',
    darkGrey: '#657786',
    gray: '#aabbc2',
    lightGray: '#e1e8ed',
    white: '#f5f8fa',
    error: 'red'
  }
}
const GlobalStyle = createGlobalStyle
`*{
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
}`

function App() {

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Landing/>
      </ThemeProvider>

  );
}

export default App;
