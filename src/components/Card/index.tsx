import React from 'react';
import { IImage } from '../Image';
import BaseCard, { IBaseCard } from './BaseCard';
import DefaultImage from '../../assets/cards/default-card.png';

export interface ICard extends IBaseCard {
  id: string;
  image: IImage;
}

const DEFAULT_CARD_IMAGE: IImage = {
  src: DefaultImage,
  alt: 'Default',
};

export const Card = ({ image, ...cardProps }: ICard) => {
  return (
    <BaseCard {...cardProps}>
      <BaseCard.Face front {...{ ...image, matched: cardProps.isMatched }} />
      <BaseCard.Face {...DEFAULT_CARD_IMAGE} />
    </BaseCard>
  );
};
