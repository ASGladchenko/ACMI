import { cn } from '@/utils';
import { HeaderBtnTypes } from './types';

export const configButton = (buttonType: HeaderBtnTypes) => {
  return {
    square: cn('p-[11px]'),
    normal: cn('gap-2.5 py-[9px] px-[19px]'),
  }[buttonType];
};
