import { cn } from '@/utils';

import { ButtonProps } from './types';
import { ChildrenProps } from '../../types';
import { LoaderCircle } from '@/shared/icons';

export const Button = ({
  children,
  disabled,
  className,
  loading,
  ...props
}: ChildrenProps<ButtonProps>) => {
  const styles = cn(
    'flex items-center justify-center gap-2.5 w-full rounded-button px-6 py-2.5 cursor-pointer',
    className
  );

  return (
    <button {...props} disabled={loading || disabled} className={styles}>
      {loading && <LoaderCircle color="red" />}
      {children}
    </button>
  );
};
