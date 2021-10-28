/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import LoginPage from '../LoginPage';
import { colorVars, mainButtonStyles, inputFieldStyles } from './css-variables';

export const StyledLoginPage = styled(LoginPage)`
  color: ${colorVars.primaryDarkBrown};
  font-size: 30px;

  & p {
    font-weight: 700;
  }

  & img {
    width: 100px;
    margin-top: 30px;
  }

  & input {
    @include ${inputFieldStyles};
    height: 30px;

    &:hover {
      background-color: ${colorVars.mediumPink};
      transition: background-color 0.4s;
    }

    &::placeholder {
      color: ${colorVars.primaryDarkBrown};
      opacity: 0.6;
      padding-left: 5px;
    }
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
