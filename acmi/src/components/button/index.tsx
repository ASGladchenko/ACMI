import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils';

import { configButton, configLoader } from './config';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
  buttonType?: 'standard' | 'outline' | 'ghost';
}

export const Button = ({
  loading,
  disabled,
  children,
  className,
  buttonType = 'standard',
  ...props
}: ButtonProps) => {
  const styles = cn(
    'flex items-center justify-center gap-2 w-full text-[14px] font-medium rounded-xl leading-[18px] px-5 py-2.5 cursor-pointer',
    configButton[buttonType],
    className
  );

  return (
    <button className={styles} {...props} disabled={loading || disabled}>
      {loading && (
        <div className="flex items-center justify-center">
          <span
            className={cn(
              configLoader[buttonType],
              'block h-[18px] w-[18px] animate-spin rounded-full border-3 border-t-transparent duration-1000'
            )}
          />
        </div>
      )}

      {children}
    </button>
  );
};
