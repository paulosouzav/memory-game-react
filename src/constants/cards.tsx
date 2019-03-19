import Asteroid from '../assets/cards/002-asteroid.png';
import Earth from '../assets/cards/006-planet-earth.png';
import Mars from '../assets/cards/017-mars.png';
import Sun from '../assets/cards/033-sun.png';
import Saturn from '../assets/cards/028-saturn.png';
import Spaceship from '../assets/cards/014-space-ship.png';
import DefaultImage from '../assets/cards/default-card.png';
import { ICard } from '../components/Card';
import { IImage } from '../components/Image';

export const DEFAULT_CARD_IMAGE: IImage = {
  src: DefaultImage,
  alt: 'Default',
};

export const CARDS: Array<ICard> = [
  {
    id: 'asteroid',
    image: {
      src: Asteroid,
      alt: 'Asteroid',
    },
  },
  {
    id: 'earth',
    image: {
      src: Earth,
      alt: 'Earth',
    },
  },
  {
    id: 'mars',
    image: {
      src: Mars,
      alt: 'Mars',
    },
  },
  {
    id: 'saturn',
    image: {
      src: Saturn,
      alt: 'Saturn',
    },
  },
  {
    id: 'spaceship',
    image: {
      src: Spaceship,
      alt: 'Spaceship',
    },
  },
  {
    id: 'sun',
    image: {
      src: Sun,
      alt: 'Sun',
    },
  },
];
