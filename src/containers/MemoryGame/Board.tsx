import styled, { css } from 'styled-components';

interface Props {
  large?: boolean;
  medium?: boolean;
}

const Board = styled.div`
  width: 100%;
  max-width: 720px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  ${({ medium }: Props) => medium && MEDIUM}
  ${({ large }: Props) => large && LARGE}
`;

const MEDIUM = css`
  max-width: 1050px;
`;

const LARGE = css`
  max-width: unset;
`;

Board.displayName = 'Board';

export default Board;
