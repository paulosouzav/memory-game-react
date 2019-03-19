import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Title from '../Title';

describe('Title', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Title />);
    expect(wrapper).toMatchSnapshot();
  });
});
