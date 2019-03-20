import { CARDS } from '../../../constants/cards';
import * as UTILS from '../utils';
import { ICard } from '../../../components/Card';
import { delay } from 'q';

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

  describe('unflipUnmatched', () => {
    it('should unflip all unmatched cards properly', () => {
      const isMatched = false;
      const cards: Array<ICard> = mockFlippedCards(CARDS, isMatched);
      cards[0].isMatched = true;
      cards[1].isMatched = true;

      const unflippedCards = UTILS.unflipUnmatchedCards(cards);

      expect(unflippedCards[0].isFlipped).toBe(true);
      expect(unflippedCards[1].isFlipped).toBe(true);
      expect(unflippedCards[2].isFlipped).toBe(false);
    });
  });

  describe('checkEndGame', () => {
    it('should end game if all cards are matched', () => {
      const allMatchedCards: Array<ICard> = mockFlippedCards(CARDS);
      const hasGameEnded = UTILS.checkEndGame(allMatchedCards);
      expect(hasGameEnded).toBe(true);
    });

    it('should not end game if there are unmatched cards', () => {
      const isMatched = false;
      const allMatchedCards: Array<ICard> = mockFlippedCards(CARDS, isMatched);
      const hasGameEnded = UTILS.checkEndGame(allMatchedCards);
      expect(hasGameEnded).toBe(false);
    });
  });

  describe('delay', () => {
    jest.useFakeTimers();
    it('should await delay for specific time', async () => {
      const DELAY: number = 1000;
      UTILS.delay(DELAY);
      expect(setTimeout).toBeCalledWith(expect.any(Function), DELAY);
    });
  });

  function mockFlippedCards(cards: Array<ICard>, isMatched: boolean = true) {
    return cards.map(card => ({ ...card, isFlipped: true, isMatched }));
  }
});
