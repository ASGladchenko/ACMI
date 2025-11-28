import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = 'primary' | 'secondary' | 'normal';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
  buttonType?: ButtonTypes;
}
