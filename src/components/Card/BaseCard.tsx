import styled, { css } from 'styled-components';
import { transitions } from 'polished';
import { SHADOWS } from '../../constants/shadows';
import { ROTATION } from '../../constants/rotation';
import { mediaMax } from '../../utils/mediaQuery';
import Face from './Face';

export interface IBaseCard {
  isFlipped?: boolean;
  isMatched?: boolean;
}

const BaseCard: any = styled.div`
  width: 155px;
  height: 210px;
  margin: 10px;
  position: relative;
  border-radius: 8px;

  ${transitions(['transform', 'opacity'], '.4s')}
  transform: scale(1);
  transform-style: preserve-3d;

  ${SHADOWS.normal}
  
  ${mediaMax.sm`
    width: 90px;
    height: 130px;
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
BaseCard.displayName = 'BaseCard';

export default BaseCard;
