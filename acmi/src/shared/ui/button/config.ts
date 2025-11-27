import { ButtonTypes } from './types';

export const configLoader = {
  primary: 'text-white',
  secondary: 'text-accent-normal',
  normal: 'text-accent-normal',
};

export const configButton = (colorType: ButtonTypes) => {
  return {
    primary: `text-white disabled:text-white/30 bg-accent-normal hover:not-disabled:bg-accent-interactions-dark active:not-disabled:bg-accent-interactions-darker disabled:bg-accent-normal/30 disabled:after:absolute disabled:after:inset-0 disabled:after:bg-bg-secondary/50`,

    secondary: `text-accent-normal bg-accent-light disabled:text-accent-normal/30 hover:not-disabled:bg-accent-interactions-lighter active:not-disabled:bg-accent-interactions-light disabled:after:absolute disabled:after:inset-0 disabled:after:bg-bg-secondary/50`,

    normal: `text-text-primary bg-bg-secondary disabled:text-text-primary/30 hover:not-disabled:bg-accent-interactions-lighter active:not-disabled:bg-accent-light disabled:bg-bg-secondary/30 disabled:after:absolute disabled:after:inset-0 disabled:after:bg-bg-secondary/50`,
  }[colorType];
};
