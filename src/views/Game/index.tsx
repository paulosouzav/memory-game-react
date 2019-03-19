import React from 'react';
import styled from 'styled-components';
import { MemoryGame } from '../../containers/MemoryGame';
import { COLORS } from '../../constants/colors';

const PageWrapper = styled.main`
  height: 100vh;
  display: flex;
  background-color: ${COLORS.gray800};
`;

export const Game = () => (
  <PageWrapper>
    <MemoryGame />
  </PageWrapper>
);
