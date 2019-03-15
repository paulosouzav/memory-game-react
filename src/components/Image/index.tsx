import React from 'react';

export interface IImage {
  className?: string;
  src: string;
  alt?: string;
}

export const Image = (props: IImage) => <img {...props} />;
