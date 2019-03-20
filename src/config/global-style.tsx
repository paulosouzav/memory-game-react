import { createGlobalStyle } from 'styled-components';
import { FONT_FACES } from '../constants/fonts';

const GlobalStyle = createGlobalStyle`
  html {
    ${FONT_FACES}
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
`;

export default GlobalStyle;
