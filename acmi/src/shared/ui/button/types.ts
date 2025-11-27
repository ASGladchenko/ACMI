import { BtnColorType } from '@/components';
import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = 'standard' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
  colorType?: BtnColorType;
  buttonType?: ButtonTypes;
}
