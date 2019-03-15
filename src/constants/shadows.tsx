import { css } from 'styled-components';
import { COLORS } from './colors';
import { opacify } from 'polished';

const SHADOW_COLORS = {
  soft: opacify(0.3, COLORS.black),
  normal: opacify(0.5, COLORS.black),
  hard: opacify(0.8, COLORS.black),
};

export const SHADOWS = Object.freeze({
  none: css`
    box-shadow: none;
  `,
  soft: css`
    box-shadow: 0 0 8px ${SHADOW_COLORS.soft};
  `,
  normal: css`
    box-shadow: 0 0 8px ${SHADOW_COLORS.normal};
  `,
  hard: css`
    box-shadow: 0 0 8px ${SHADOW_COLORS.hard};
  `,
});
