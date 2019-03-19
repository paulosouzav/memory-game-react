import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { EndGame } from '../';

describe('EndGame', () => {
  it('should render without failing', () => {
    const wrapper = mount(<EndGame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render active EndGame', () => {
    const wrapper = mount(<EndGame active />);
    expect(wrapper).toHaveStyleRule('opacity', '1');
    expect(wrapper).toHaveStyleRule('visibility', 'visible');
    expect(wrapper).toMatchSnapshot();
  });
});
