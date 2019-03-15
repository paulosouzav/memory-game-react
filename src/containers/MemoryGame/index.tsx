import React, { PureComponent } from 'react';
import { Board } from './Board';
import { CARDS } from '../../constants';
import { Card, ICard } from '../../components/Card';
import { generateBoardCards, getUnmatchedCards } from './utils';
import { Nullable } from '../../utils/nullable';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

interface State {
  cards: Array<ICard>;
  hasFlippedCard: boolean;
  lockBoard: boolean;
  firstCard?: Nullable<ICard>;
  secondCard?: Nullable<ICard>;
}

const initialState: State = {
  cards: generateBoardCards(CARDS),
  hasFlippedCard: false,
  lockBoard: false,
  firstCard: null,
  secondCard: null,
};

const UNFLIP_DELAY: number = 1000;

export class MemoryGame extends PureComponent<any, State> {
  state = cloneDeep(initialState);

  flipCard = (card: ICard) => () => {
    const { lockBoard, firstCard, hasFlippedCard } = this.state;

    if (lockBoard || isEqual(card, firstCard)) return;

    card.isFlipped = true;

    if (!hasFlippedCard) {
      this.setState({
        hasFlippedCard: true,
        firstCard: card,
      });
      return;
    }

    this.setState({ secondCard: card }, this.checkForMatch);
  };

  checkForMatch = () => {
    const { firstCard, secondCard } = this.state;
    const isMatch = firstCard!.id === secondCard!.id;
    // isMatch ? this.disableCards() : this.unFlipCards();
    this.unflipCards();
  };

  disableCards = () => {
    // TODO
  };

  unflipCards = () => {
    this.setState({ lockBoard: true });

    const { cards } = this.state;
    const unflippedCards = getUnmatchedCards(cards).map(card => ({
      ...card,
      isFlipped: false,
    }));

    setTimeout(() => {
      this.setState({ cards: unflippedCards }, this.resetBoardProps);
    }, UNFLIP_DELAY);
  };

  resetBoardProps = () => {
    const { cards, ...boardprops } = initialState;
    this.setState({ ...boardprops });
  };

  _renderCards = () => {
    const { cards } = this.state;
    return cards.map(card => (
      <Card {...{ ...card, onClick: this.flipCard(card) }} />
    ));
  };

  render() {
    return <Board>{this._renderCards()}</Board>;
  }
}
