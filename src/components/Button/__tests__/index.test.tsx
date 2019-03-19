import React from 'react';
import { Button } from '../';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Button', () => {
  it('should render without failing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
