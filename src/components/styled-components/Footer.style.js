/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../Footer';
import { colorVars, fontVars } from './css-variables';

export const StyledFooter = styled(Footer)`
  background-color: ${colorVars.primaryDarkBrown};
  height: 100px;
  color: ${colorVars.primaryLightBrown};
  /* border: solid red 3px; */

  & h4 {
    font-size: 18px;
    font-weight: 700;
    font-family: ${fontVars.titleFont};
    letter-spacing: 1px;
    margin: 15px 0 10px 0;
  }

  & ul {
    margin: 0;
    padding: 0;

    & li {
      margin-bottom: 5px;
      font-size: 15px;
    }
  }

  #footer-content {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
