import { createGlobalStyle } from 'styled-components';

/* eslint-disable import/prefer-default-export */

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f2dcc4;
    margin: 0px;
    padding: 0px;

    div#logo {
      font-size: 45px;
      font-family: 'IBM Plex Serif', serif; 
    }

    li, p, div {
      font-family: 'Urbanist', sans-serif;
    }

    li {
      list-style-type: none;
    }
  }
`;
