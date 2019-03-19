import React from 'react';
import { IImage } from '../Image';
import BaseCard, { IBaseCard } from './BaseCard';
import { DEFAULT_CARD_IMAGE } from '../../constants/cards';

export interface ICard extends IBaseCard {
  id: string;
  image: IImage;
}

export const Card = ({ image, ...cardProps }: ICard) => {
  return (
    <BaseCard {...cardProps}>
      <BaseCard.Face front {...{ ...image, matched: cardProps.isMatched }} />
      <BaseCard.Face {...DEFAULT_CARD_IMAGE} />
    </BaseCard>
  );
};
