import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BaseCard from '../BaseCard';

describe('BaseCard', () => {
  it('should render without failing', () => {
    const wrapper = mount(<BaseCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain element Face', () => {
    expect(BaseCard.Face).toBeDefined();
  });

  it('should have active style if not flipped', () => {
    const isFlipped = false;
    const wrapper = mount(<BaseCard {...{ isFlipped }} />);
    expect(wrapper).toHaveStyleRule('transform', 'scale(0.97)', {
      modifier: ':active',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should not have active style if flipped', () => {
    const wrapper = mount(<BaseCard isFlipped />);
    expect(wrapper).not.toHaveStyleRule('transform', 'scale(0.97)', {
      modifier: ':active',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render style when matched', () => {
    const wrapper = mount(<BaseCard isMatched />);
    expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');
    expect(wrapper).toMatchSnapshot();
  });
});
