import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Card } from '../';
import { DEFAULT_CARD_IMAGE } from '../../../constants/cards';
import Asteroid from '../../../assets/cards/002-asteroid.png';

const CARD_MOCK = {
  id: 'asteroid',
  image: {
    src: Asteroid,
    alt: 'Asteroid',
  },
  isMatched: false,
};

describe('Card', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Card {...CARD_MOCK} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render front and back face of card', () => {
    const expectedFrontFaceProps = {
      ...CARD_MOCK.image,
      matched: CARD_MOCK.isMatched,
      front: true,
    };

    const wrapper = mount(<Card {...CARD_MOCK} />);
    const frontFace = wrapper.find('Face').at(0);
    const backFace = wrapper.find('Face').at(1);

    expect(frontFace.props()).toEqual(expectedFrontFaceProps);
    expect(backFace.props()).toEqual(DEFAULT_CARD_IMAGE);
  });
});
