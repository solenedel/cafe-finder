/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FavsPage } from '../FavsPage';
import { colorVars } from './css-variables';

export const StyledFavsPage = styled(FavsPage)`
  color: ${colorVars.primaryDarkBrown};
  margin-top: 35px;
  height: 100vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 30px;
  }
  & p {
    font-size: 23px;
  }

  & img {
    width: 100px;
  }
`;
