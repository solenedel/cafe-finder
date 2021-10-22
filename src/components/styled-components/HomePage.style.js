/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars } from './css-variables';

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

  & div {
    font-size: 25px;
    margin-bottom: 30px;
    color: ${colorVars.primaryDarkBrown};
  }

  & #map-div {
    border: solid 2.5px ${colorVars.primaryDarkBrown};
    margin-top: 30px;
  }

  & #search-section {
    border: solid blue 3px;
    margin: 50px 0 45px 0;
  }
`;
