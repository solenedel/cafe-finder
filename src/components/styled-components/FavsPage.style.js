/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FavsPage } from '../FavsPage';
import { colorVars } from './css-variables';

export const StyledFavsPage = styled(FavsPage)`
  color: ${colorVars.primaryDarkBrown};
  margin-top: 35px;
  /* height: 100vh; */
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 30px;
  }

  & h4 {
    font-size: 25px;
  }

  & p {
    font-size: 23px;
  }

  & img {
    width: 100px;
  }

  & #favCafeList {
    display: flex;
    flex-wrap: wrap;
    padding-left: 50px;
    border: solid blue 3px;
    width: 80vw;
  }
`;
