import styled from 'styled-components';
import Nav from '../Nav';

/* eslint-disable import/prefer-default-export */

export const StyledNav = styled(Nav)`
  background-color: #5a3924;
  height: 90px;
  color: #f2dcc4;

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
    }
  }
`;
