import { cn } from '@/utils';
import { LoaderCircle } from '@/shared/icons';

import { ButtonProps } from './types';
import { ChildrenProps } from '../../types';
import { configButton, configLoader } from './config';

export const Button = ({
  loading,
  children,
  disabled,
  className,
  buttonType = 'primary',
  ...props
}: ChildrenProps<ButtonProps>) => {
  const styles = cn(
    'relative flex items-center justify-center gap-2.5 w-full rounded-lg2 px-6 py-2.5 cursor-pointer font-medium disabled:cursor-not-allowed transition duration-300 ease-in-out disabled:[&>*:not(.icon-loader)]:opacity-30',
    configButton(buttonType),
    className
  );

  return (
    <button {...props} disabled={loading || disabled} className={styles}>
      {loading && (
        <LoaderCircle
          className={cn(
            'icon-loader animate-spin-pulse absolute z-10 h-6 w-6',
            configLoader[buttonType]
          )}
        />
      )}
      {children}
    </button>
  );
};
