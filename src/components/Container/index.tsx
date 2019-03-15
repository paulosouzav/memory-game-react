import styled, { css } from 'styled-components';
import { MAX_WIDTHS, SIZES } from '../../constants';
import { mediaMin } from '../../utils';

// Modifiers should always be optional
// so always add the "?" (question mark) sign
interface Modifiers {
  fluid?: boolean;
  topSpaced?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  
  ${mediaMin.sm`max-width: ${MAX_WIDTHS.sm}px`}
  ${mediaMin.md`max-width: ${MAX_WIDTHS.md}px`}
  ${mediaMin.lg`max-width: ${MAX_WIDTHS.lg}px`}
  ${mediaMin.xl`max-width: ${MAX_WIDTHS.xl}px`}

  ${({ fluid }: Modifiers) => fluid && FLUID}
  ${({ topSpaced }: Modifiers) => topSpaced && TOP_SPACED}
`;

const FLUID = css`
  max-width: 100% !important;
`;

const TOP_SPACED = css`
  margin-top: ${SIZES.navHeight};
`;
