import { Game } from '../views';

interface route {
  id: string;
  path: string;
  description: string;
  Component: Function;
}

export const ROUTES: Array<route> = [
  {
    id: 'game',
    path: '/',
    description: 'Game',
    Component: Game,
  },
];
