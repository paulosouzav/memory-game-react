import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BaseCard from '../BaseCard';

describe('BaseCard', () => {
  it('should render without failing', () => {
    const wrapper = mount(<BaseCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have element Face', () => {
    expect(BaseCard.Face).toBeDefined();
  });
});
