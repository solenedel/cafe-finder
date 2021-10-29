/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../Footer';
import { colorVars, fontVars } from './css-variables';

export const StyledFooter = styled(Footer)`
  background-color: ${colorVars.primaryDarkBrown};
  height: 115px;
  width: 100vw;
  color: ${colorVars.primaryLightBrown};
  position: static;
  /* margin-top: 100px; */

  & h4 {
    font-size: 20px;
    font-weight: 700;
    font-family: ${fontVars.titleFont};
    letter-spacing: 1px;
    margin: 5px 0 10px 20px;
    padding-top: 15px;
  }

  & ul {
    margin: 0;
    padding: 0;

    & li {
      margin-bottom: 5px;
      font-size: 18px;
    }

    & div.credits {
      font-size: 14px;

      & a,
      a:hover,
      a:active {
        color: ${colorVars.primaryLightBrown};
      }
    }
  }

  #footer-content {
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .social-icons {
    display: flex;
    padding-right: 40px;

    & i {
      font-size: 40px;
      margin-left: 20px;
      opacity: 0.85;
      transition: color 0.4s;

      &:hover {
        color: ${colorVars.pinkHover};
        transition: color 0.4s;
      }
    }
  }
`;
