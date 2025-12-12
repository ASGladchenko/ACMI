import { ButtonTypes } from './types';

export const configLoader = {
  primary: 'text-white',
  secondary: 'text-accent-normal',
  normal: 'text-accent-normal',
  outline: 'text-accent-normal',
};

export const configButton = (colorType: ButtonTypes) => {
  return {
    primary: `text-white bg-accent-normal hover:not-disabled:bg-accent-interactions-dark active:not-disabled:bg-accent-interactions-darker disabled:bg-accent-normal/30 disabled:text-white/30`,

    secondary: `text-accent-normal bg-accent-light hover:not-disabled:bg-accent-interactions-lighter active:not-disabled:bg-accent-interactions-light disabled:bg-accent-light/30 disabled:text-accent-normal/30`,

    normal: `text-text-primary bg-bg-secondary disabled:text-text-primary/30 hover:not-disabled:bg-accent-interactions-lighter active:not-disabled:bg-accent-light disabled:bg-bg-secondary/30 disabled:text-text-primary/30`,
    outline:
      'gap-[15px] text-text-primary bg-bg-secondary border border-iron hover:not-disabled:bg-accent-interactions-lighter active:not-disabled:bg-accent-light disabled:border-iron/30 disabled:text-text-primary/30 disabled:bg-bg-secondary/30',
  }[colorType];
};
