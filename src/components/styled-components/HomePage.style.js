/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars } from './css-variables';

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
`;
