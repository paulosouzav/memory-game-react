import React, { PureComponent } from 'react';
import { Board } from './Board';
import { Card, EndGame } from '../../components';
import { ICard } from '../../components/Card';
import { CARDS } from '../../constants';
import {
  generateBoardCards,
  unflipUnmatchedCards,
  unflipAllCards,
  checkCardsMatch,
  checkEndGame,
  delay,
} from './utils';
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
    isMatch ? this.disableCards() : this.unflipCards();
  };

  disableCards = () => {
    const { firstCard, cards } = this.state;
    const matchedCards = checkCardsMatch(cards, firstCard!);
    this.setState({ cards: matchedCards }, this.resetBoardProps);
  };

  unflipCards = async (unflipAll?: boolean) => {
    this.setState({ lockBoard: true });

    const { cards } = this.state;
    const unflippedCards = unflipAll
      ? unflipAllCards(cards)
      : unflipUnmatchedCards(cards);

    const unflipDelay = unflipAll ? 0 : UNFLIP_DELAY;
    await delay(unflipDelay);
    this.setState({ cards: unflippedCards }, this.resetBoardProps);
  };

  resetBoardProps = () => {
    const { cards, ...boardprops } = initialState;
    this.setState({ ...boardprops });
  };

  startOver = async () => {
    const unflipAllCards = true;
    await this.unflipCards(unflipAllCards);
    const newCards = generateBoardCards(CARDS);
    this.setState({ cards: newCards });
  };

  _renderCards = () => {
    const { cards } = this.state;
    return cards.map(this._renderSingleCard);
  };

  _renderSingleCard = (card: ICard) => {
    const onClick = card.isMatched ? null : this.flipCard(card);
    return <Card {...{ ...card, onClick }} />;
  };

  _renderEndGame = () => {
    const { cards } = this.state;
    const hasGameEnded = checkEndGame(cards);
    return (
      <EndGame {...{ active: hasGameEnded }}>
        <EndGame.Title>YOU WON!</EndGame.Title>
        <EndGame.Button {...{ onClick: this.startOver }}>
          Play again
        </EndGame.Button>
      </EndGame>
    );
  };

  render() {
    return (
      <>
        {this._renderEndGame()}
        <Board>{this._renderCards()}</Board>;
      </>
    );
  }
}
