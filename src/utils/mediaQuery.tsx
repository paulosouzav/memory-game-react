import { css } from 'styled-components';
import { BREAKPOINTS } from '../constants/screen';

type MediaQuery = 'min' | 'max';

const mediaQuery = (type: MediaQuery) =>
  Object.keys(BREAKPOINTS).reduce((acc: any, label: string) => {
    acc[label] = (
      literals: TemplateStringsArray,
      ...placeholders: any[]
    ) => css`
      @media (${type}-width: ${BREAKPOINTS[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  }, {});

export const mediaMin = mediaQuery('min');
export const mediaMax = mediaQuery('max');
