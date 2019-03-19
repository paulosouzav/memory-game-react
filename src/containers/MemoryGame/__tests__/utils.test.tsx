import { CARDS } from '../../../constants/cards';
import * as UTILS from '../utils';
import { ICard } from '../../../components/Card';

describe('Memory Game Utils', () => {
  describe('generateBoardCards', () => {
    it('should duplicate cards and add key', () => {
      const generateBoardCards = UTILS.generateBoardCards(CARDS);
      CARDS.forEach(card => {
        const numOfCards = generateBoardCards.filter(
          generatedCard => card.id === generatedCard.id
        );
        expect(numOfCards.length).toBe(2);
      });

      generateBoardCards.forEach(card => {
        expect(card.key).toBeDefined();
      });
    });
  });

  describe('unflipAllCards', () => {
    it('should unflip all cards properly', () => {
      const cards: Array<ICard> = mockFlippedCards(CARDS);
      const unflippedCards = UTILS.unflipAllCards(cards);
      unflippedCards.forEach(unflippedCard => {
        expect(unflippedCard.isFlipped).toBe(false);
        expect(unflippedCard.isMatched).toBe(false);
      });
    });
  });

  function mockFlippedCards(cards: Array<ICard>) {
    return cards.map(card => ({ ...card, isFlipped: true, isMatched: true }));
  }
});
