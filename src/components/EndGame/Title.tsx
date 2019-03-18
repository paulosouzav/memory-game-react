import styled from 'styled-components';
import { COLORS, TRANSPARENT_BLACK } from '../../constants';

const Title = styled.h1`
  color: ${COLORS.white};

  font-size: 70px;
  text-shadow: 0 0 8px ${TRANSPARENT_BLACK.normal};
  text-align: center;
  line-height: normal;

  margin: 0 0 10px;
  padding: 0;
`;

export default Title;
