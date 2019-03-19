import { CARDS, DEFAULT_CARD_IMAGE } from '../cards';

describe('CARDS', () => {
  it('should have expected values', () => {
    expect(CARDS).toMatchSnapshot();
  });
});

describe('DEFAULT_CARD_IMAGE', () => {
  it('should have expected values', () => {
    expect(DEFAULT_CARD_IMAGE).toMatchSnapshot();
  });
});
