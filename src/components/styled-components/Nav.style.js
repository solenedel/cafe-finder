/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  background-color: ${colorVars.primaryDarkBrown};
  height: 90px;
  color: ${colorVars.primaryLightBrown};

  & #nav-flexbox {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  & ul {
    display: flex;
    justify-content: flex-end;

    & li {
      margin-right: 30px;
      font-size: 28px;
      transition: color 0.4s;

      &:hover {
        color: ${colorVars.pinkHover};
        transition: color 0.4s;
      }
    }
  }
`;
