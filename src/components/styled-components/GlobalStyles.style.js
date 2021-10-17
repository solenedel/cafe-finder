/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { colorVars } from './css-variables';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colorVars.primaryLightBrown};
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
    }
  }
`;
