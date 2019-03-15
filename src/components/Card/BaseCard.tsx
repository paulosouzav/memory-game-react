import styled, { css } from 'styled-components';
import { SHADOWS, ROTATION } from '../../constants';
import Face from './Face';
import { mediaMax } from '../../utils';

export interface IBaseCard {
  isFlipped?: boolean;
  isMatched?: boolean;
}

const BaseCard: any = styled.div`
  width: calc((100% / 4) - 20px);
  height: calc((100% / 3) - 20px);
  margin: 10px;
  position: relative;
  border-radius: 8px;

  transition: transform 0.4s, opacity 0.4s;
  transform: scale(1);
  transform-style: preserve-3d;

  ${SHADOWS.normal}
  
  ${mediaMax.sm`
    width: calc((100% / 3) - 20px);
    height: calc((100% / 4) - 20px);
  `}

  ${({ isFlipped }: IBaseCard) => !isFlipped && ACTIVE}
  ${({ isMatched }: IBaseCard) => isMatched && MATCHED}
  ${({ isFlipped }: IBaseCard) => isFlipped && ROTATION.half}
`;

const ACTIVE = css`
  &:active {
    transform: scale(0.97);
  }
`;

const MATCHED = css`
  cursor: not-allowed;
`;

BaseCard.Face = Face;

export default BaseCard;
