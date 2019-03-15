interface Indexable {
  [key: string]: number;
}

export const MAX_WIDTHS: Indexable = Object.freeze({
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
});

export const BREAKPOINTS: Indexable = Object.freeze({
  sm: 576,
  md: 758,
  lg: 992,
  xl: 1200,
});
