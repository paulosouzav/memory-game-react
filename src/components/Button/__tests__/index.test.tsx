import React from 'react';
import Button from '../';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe('Button', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
