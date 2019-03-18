import { css } from 'styled-components';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';
import RobotoThin from '../assets/fonts/Roboto-Thin.ttf';
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

export const FONTS = Object.freeze({
  REGULAR: 'Roboto',
  THIN: 'RobotoThin',
  LIGHT: 'RobotoLight',
  BOLD: 'RobotoBold',
});

interface FontFace {
  name: string;
  url: any;
  weight: string | number;
}

const FONT_FACES_LIST: Array<FontFace> = [
  {
    name: FONTS.REGULAR,
    url: Roboto,
    weight: 'normal',
  },
  {
    name: FONTS.THIN,
    url: RobotoThin,
    weight: 100,
  },
  {
    name: FONTS.LIGHT,
    url: RobotoLight,
    weight: 300,
  },
  {
    name: FONTS.BOLD,
    url: RobotoBold,
    weight: 'bold',
  },
];

export const FONT_FACES = css`
  ${FONT_FACES_LIST.map(
    ({ name, url, weight }: FontFace) => css`
      @font-face {
        font-family: ${name}, 'sans-serif';
        src: url(${url});
        font-weight: ${weight};
      }
    `
  )}
`;
