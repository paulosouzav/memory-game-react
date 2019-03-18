import { css } from 'styled-components';
import { TRANSPARENT_BLACK } from './colors';

export const SHADOWS = Object.freeze({
  none: css`
    box-shadow: none;
  `,
  soft: css`
    box-shadow: 0 0 8px ${TRANSPARENT_BLACK.soft};
  `,
  normal: css`
    box-shadow: 0 0 8px ${TRANSPARENT_BLACK.normal};
  `,
  hard: css`
    box-shadow: 0 0 8px ${TRANSPARENT_BLACK.hard};
  `,
});
