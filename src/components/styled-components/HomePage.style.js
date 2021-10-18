/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import HomePage from '../HomePage';
// import { colorVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  border: solid red 3px;
  height: 100vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 150px;
  }

  & div {
    font-size: 25px;
  }
`;
