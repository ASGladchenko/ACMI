import { ButtonHTMLAttributes } from 'react';

export interface BadgeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}
