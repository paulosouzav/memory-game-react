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

export const getMatchedCards = (cards: Array<ICard>) => {
  return cards.filter(card => !card.isMatched);
};

export const unflipUnmatchedCards = (cards: Array<ICard>) =>
  cards.map(card => (card.isMatched ? card : { ...card, isFlipped: false }));

export const unflipAllCards = (cards: Array<ICard>) =>
  cards.map(card => ({ ...card, isFlipped: false, isMatched: false }));

export const checkCardsMatch = (cards: Array<ICard>, cardToMatch: ICard) =>
  cards.map(card =>
    card.id === cardToMatch.id ? { ...card, isMatched: true } : card
  );

export const checkEndGame = (cards: Array<ICard>) =>
  !cards.some(card => !card.isMatched);
