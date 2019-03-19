import React from 'react';
import Board from '../Board';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('Board', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Board />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render medium Board', () => {
    const wrapper = mount(<Board medium />);
    expect(wrapper).toHaveStyleRule('max-width', '1050px');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render large Board', () => {
    const wrapper = mount(<Board large />);
    expect(wrapper).toHaveStyleRule('max-width', 'unset');
    expect(wrapper).toMatchSnapshot();
  });
});
