import styled from 'styled-components';
import { COLORS, TRANSPARENT_BLACK } from '../../constants/colors';
import { mediaMax } from '../../utils/mediaQuery';

const Title = styled.h1`
  color: ${COLORS.white};

  font-size: 50px;
  text-shadow: 0 0 8px ${TRANSPARENT_BLACK.normal};
  text-align: center;
  line-height: normal;

  margin: 0 0 10px;
  padding: 0;

  ${mediaMax.sm`
    font-size: 40px;
  `}
`;

Title.displayName = 'Title';

export default Title;
