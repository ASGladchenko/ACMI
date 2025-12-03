import { cn } from '@/utils';
import { HeaderBtnColorType, HeaderBtnTypes } from './types';

export const configColor = (colorType: HeaderBtnColorType, isActive?: boolean) => {
  return {
    white: cn('border-white text-white disabled:border-white/30', {
      'hover:not-disabled:bg-white/20': !isActive,
    }),
    gray: cn('text-text-primary border-[#D6D8DB] disabled:border-[#D6D8DB]/30', {
      'hover:not-disabled:bg-white/20': !isActive,
    }),
  }[colorType];
};

export const configButton = (buttonType: HeaderBtnTypes) => {
  return {
    square: cn('p-[11px]'),
    normal: cn('gap-2.5 py-[11px] px-[19px]'),
  }[buttonType];
};
