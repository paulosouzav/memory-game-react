import React from 'react';
import { mount } from 'enzyme';
import { Image } from '../';

const IMAGE_PROPS = {
  src: 'fake/path/img.png',
  alt: 'Fake Image',
};

describe('Image', () => {
  it('should render without failing', () => {
    const wrapper = mount(<Image {...IMAGE_PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });
});
