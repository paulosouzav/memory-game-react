import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Face from '../Face';

describe('Face', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Face />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should only pass valid props to Image', () => {
    const src = 'fake/path/img.png';
    const props = {
      front: true,
      matched: true,
    };
    const wrapper = mount(<Face {...{ ...props, src }} />);
    const image = wrapper.find('Image');
    expect(image.props()).toEqual(expect.not.objectContaining(props));
  });
});
