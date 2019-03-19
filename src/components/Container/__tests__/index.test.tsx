import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Container from '../';
import { SIZES } from '../../../constants/sizes';

describe('BaseCard', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Container />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fluid container', () => {
    const wrapper = mount(<Container fluid />);
    expect(wrapper).toHaveStyleRule('max-width', '100% !important');
  });

  it('should render top spaced container', () => {
    const wrapper = mount(<Container topSpaced />);
    expect(wrapper).toHaveStyleRule('margin-top', SIZES.navHeight);
  });
});
