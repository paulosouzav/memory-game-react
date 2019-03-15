import React from 'react';
import styled from 'styled-components';
import { MemoryGame } from '../../containers';

const PageWrapper = styled.main`
  height: 100vh;
  display: flex;
  background-color: #34495e;
`;

export const Game = () => (
  <PageWrapper>
    <MemoryGame />
  </PageWrapper>
);
