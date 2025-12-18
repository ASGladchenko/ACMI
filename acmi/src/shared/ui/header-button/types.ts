import { ButtonHTMLAttributes, ReactElement, Ref } from 'react';

export type HeaderBtnTypes = 'square' | 'normal';

export interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  loading?: boolean;
  className?: string;
  isActive?: boolean;
  isMessage?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  buttonType?: HeaderBtnTypes;
  ref?: Ref<HTMLButtonElement>;
}
