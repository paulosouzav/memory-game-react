import React from 'react';
import styled from 'styled-components';
import { MemoryGame } from '../../containers';
import { COLORS } from '../../constants';

const PageWrapper = styled.main`
  height: 100vh;
  display: flex;
  background-color: ${COLORS.gray800};
  /* background-color: #34495e; */
`;

export const Game = () => (
  <PageWrapper>
    <MemoryGame />
  </PageWrapper>
);
