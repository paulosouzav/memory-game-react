import React from 'react';
import styled, { css } from 'styled-components';
import { Image } from '../Image';
import { ROTATION } from '../../constants/rotation';

interface Props {
  front?: boolean;
  matched?: boolean;
}

const Face = styled(({ front, matched, ...props }) => <Image {...props} />)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  border-radius: 8px;
  position: absolute;
  background: #ecf0f1;

  transition: opacity 0.4s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  ${({ front }: Props) => front && ROTATION.half}
  ${({ matched }: Props) => matched && MATCHED}
`;

const MATCHED = css`
  opacity: 0.5;
`;

Face.displayName = 'Face';

export default Face;
