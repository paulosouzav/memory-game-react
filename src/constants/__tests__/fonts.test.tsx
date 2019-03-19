import { FONTS, FONT_FACES } from '../fonts';

describe('FONTS', () => {
  it('should have expected values', () => {
    expect(FONTS).toMatchSnapshot();
  });
});

describe('FONT_FACES', () => {
  it('should have expected values', () => {
    expect(FONT_FACES).toMatchSnapshot();
  });
});
