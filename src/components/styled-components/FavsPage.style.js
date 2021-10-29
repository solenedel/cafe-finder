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
    margin-left: 13px;
  }

  & p {
    font-size: 23px;
  }

  & img {
    width: 100px;
  }

  & #favCafeList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 50px;
    width: 80vw;
  }

  & .favCafe {
    border: solid ${colorVars.primaryDarkBrown} 3px;
    background-color: ${colorVars.primaryLightBrown};
    color: ${colorVars.primaryDarkBrown};
    transition: background-color 0.5s;
    transition: color 0.5s;
    border-radius: 5px;
    margin: 25px;
    padding: 8px;

    &:hover {
      background-color: ${colorVars.primaryDarkBrown};
      color: ${colorVars.primaryLightBrown};
      transition: background-color 0.5s;
      transition: color 0.5s;
    }

    & ul {
      margin: none;
      padding: 13px;
    }
  }
`;
