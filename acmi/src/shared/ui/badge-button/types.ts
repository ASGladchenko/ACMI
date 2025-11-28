import { ButtonHTMLAttributes } from 'react';

export interface BadgeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
}
