/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FavsPage } from '../FavsPage';
import { colorVars } from './css-variables';

export const StyledFavsPage = styled(FavsPage)`
  color: ${colorVars.primaryDarkBrown};

  & p {
    font-size: 30px;
  }
`;
