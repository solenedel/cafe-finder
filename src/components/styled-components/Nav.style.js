/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  background-color: ${colorVars.primaryDarkBrown};
  height: 90px;

  & #nav-flexbox {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  #logo-link {
    color: ${colorVars.primaryLightBrown};
    text-decoration: none;
  }

  & ul {
    display: flex;
    justify-content: flex-end;

    & li,
    a {
      margin-right: 30px;
      font-size: 28px;
      transition: color 0.4s;
      text-decoration: none;
      color: ${colorVars.primaryLightBrown};

      &:hover {
        color: ${colorVars.pinkHover};
        transition: color 0.4s;
      }
    }
  }
`;
