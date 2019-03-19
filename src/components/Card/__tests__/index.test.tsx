import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Card } from '../';
import Asteroid from '../../../assets/cards/002-asteroid.png';

const CARD_MOCK = {
  id: 'asteroid',
  image: {
    src: Asteroid,
    alt: 'Asteroid',
  },
};

describe('Card', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Card {...CARD_MOCK} />);
    expect(wrapper).toMatchSnapshot();
  });
});
