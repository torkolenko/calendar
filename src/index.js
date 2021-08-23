import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo';
    overflow: auto;
    ::-webkit-scrollbar {
      display: block;
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #a6a1a1;
      border-right: none;
      border-left: none;
    }

::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 62px; 
}

::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: 196px;
}

    // ::-webkit-scrollbar { width: 0 !important }
  }
`;

render(
  <React.StrictMode>
    <>
    <App />
    <GlobalStyle />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
