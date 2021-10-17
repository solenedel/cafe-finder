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
      margin-left: 20px;
    }

    li, p, div {
      font-family: 'Urbanist', sans-serif;
    }

    li {
      list-style-type: none;
      transition: color 0.4s;

      &:hover {
        color: #FCA4B5;
        transition: color 0.4s;
      }
    }
  }
`;
