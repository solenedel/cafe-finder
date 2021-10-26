/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import LoginPage from '../LoginPage';
import { colorVars, mainButtonStyles } from './css-variables';

export const StyledLoginPage = styled(LoginPage)`
  color: ${colorVars.primaryDarkBrown};
  font-size: 30px;

  & p {
    font-weight: 700;
  }

  & input {
    height: 23px;
    width: 180px;
    margin-left: 13px;
    margin-bottom: 20px;
  }

  &#login-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div#no-account {
    font-size: 20px;
    margin-bottom: 29px;
  }

  & button {
    align-self: center;
    margin-bottom: 30px;
    @include ${mainButtonStyles};

    &:hover {
      color: ${colorVars.pinkHover};
      transition: color 0.4s;
    }
  }
`;
