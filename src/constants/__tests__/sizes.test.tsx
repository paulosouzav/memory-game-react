import { SIZES } from '../sizes';

describe('SIZES', () => {
  it('should have expected values', () => {
    expect(SIZES).toMatchSnapshot();
  });
});
