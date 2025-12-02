import { ButtonHTMLAttributes, ReactElement } from 'react';

export type HeaderBtnTypes = 'square' | 'normal';
export type HeaderBtnColorType = 'white' | 'gray';

export interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  loading?: boolean;
  className?: string;
  isActive?: boolean;
  isMessage?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  buttonType?: HeaderBtnTypes;
  colorType?: HeaderBtnColorType;
}
