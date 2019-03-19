import React from 'react';
import styled, { css } from 'styled-components';
import { transitions } from 'polished';
import { TRANSPARENT_BLACK } from '../../constants/colors';
import { Button } from '../Button';
import Title from './Title';

interface Props {
  active?: boolean;
  buttonAction?: React.MouseEvent;
}

const EndGame: any = styled.div`
  align-self: center;
  position: absolute;
  width: 100%;
  z-index: 10;
  background-color: ${TRANSPARENT_BLACK.hard};
  padding: 80px 0;
  text-align: center;

  opacity: 0;
  visibility: hidden;
  ${transitions(['opacity', 'visibility'], '.8s')}

  ${({ active }: Props) => active && ACTIVE}
`;

const ACTIVE = css`
  opacity: 1;
  visibility: visible;
`;

EndGame.Title = Title;
EndGame.Button = Button;
EndGame.displayName = 'EndGame';

export { EndGame };
