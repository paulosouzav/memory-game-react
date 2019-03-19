import { BREAKPOINTS, MAX_WIDTHS } from '../screen';

describe('BREAKPOINTS', () => {
  it('should have expected values', () => {
    expect(BREAKPOINTS).toMatchSnapshot();
  });
});

describe('MAX_WIDTHS', () => {
  it('should have expected values', () => {
    expect(MAX_WIDTHS).toMatchSnapshot();
  });
});
