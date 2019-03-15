import shuffle from 'lodash/shuffle';
import { ICard } from '../../components/Card';

const addKey = (card: ICard, index: number) => ({
  ...card,
  key: `card-${index}`,
});

export const generateBoardCards = (cards: Array<ICard>) => {
  const duplicatedCards = [...cards, ...cards].map(addKey);
  return shuffle(duplicatedCards);
};

export const getUnmatchedCards = (cards: Array<ICard>) => {
  return cards.filter(card => !card.isMatched);
};
