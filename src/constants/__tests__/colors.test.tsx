import { COLORS, TRANSPARENT_BLACK } from '../colors';

describe('COLORS', () => {
  it('should have expected values', () => {
    expect(COLORS).toMatchSnapshot();
  });
});

describe('TRANSPARENT_BLACK', () => {
  it('should have expected values', () => {
    expect(TRANSPARENT_BLACK).toMatchSnapshot();
  });
});
