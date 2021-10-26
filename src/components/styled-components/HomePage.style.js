/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars, fontVars, mainButtonStyles } from './css-variables';

// styles for HomePage component
// includes the google map, search form, etc

export const StyledHomePage = styled(HomePage)`
  margin-top: 35px;
  height: 100vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100px;
  }

  & h3 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 70%;
    left: 13%;
    z-index: 10;
    font-size: 25px;
    color: ${colorVars.primaryDarkBrown};
  }

  & div {
    font-size: 25px;
    margin-bottom: 30px;
    color: ${colorVars.primaryDarkBrown};
  }

  & #search-section {
    font-family: ${fontVars.mainFont};
    margin: 50px 0 20px 0;

    & input {
      height: 28px;
      width: 200px;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      color: ${colorVars.primaryDarkBrown};
      transition: background-color 0.4s;

      &:hover {
        background-color: ${colorVars.mediumBrown};
        transition: background-color 0.4s;
      }

      &::placeholder {
        color: ${colorVars.primaryDarkBrown};
        opacity: 0.6;
      }
    }

    & button {
      margin-left: 20px;
      @include ${mainButtonStyles};

      &:hover {
        color: ${colorVars.pinkHover};
        transition: color 0.4s;
      }
    }
  }
`;
