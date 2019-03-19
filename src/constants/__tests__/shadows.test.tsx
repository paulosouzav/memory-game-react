import { SHADOWS } from '../shadows';

describe('SHADOWS', () => {
  it('should have expected values', () => {
    expect(SHADOWS).toMatchSnapshot();
  });
});
