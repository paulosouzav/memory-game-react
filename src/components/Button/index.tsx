import styled from 'styled-components';
import { COLORS, SHADOWS, FONTS } from '../../constants';
import { darken, transitions } from 'polished';

export const Button = styled.button`
  border-radius: 8px;
  padding: 15px 35px;

  font-size: 18px;
  font-family: ${FONTS.REGULAR};
  text-transform: uppercase;

  color: ${COLORS.white};
  background-color: ${COLORS.purple};
  border: 0;
  cursor: pointer;

  ${SHADOWS.normal}

  transition: .5s background-color;
  &:hover {
    background-color: ${darken(0.3, COLORS.purple)};
  }
`;
