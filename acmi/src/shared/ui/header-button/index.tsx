import { LoaderCircle } from '@/shared/assets';
import { ChildrenProps } from '@/shared/types';
import { cn, appendClassIcon } from '@/shared/utils';
import { transitionClass } from '@/shared/constants';

import { configButton } from './config';
import { HeaderButtonProps } from './types';

export const HeaderButton = ({
  text,
  loading,
  isActive,
  leftIcon,
  children,
  className,
  isMessage,
  rightIcon,
  buttonType = 'square',
  ...props
}: ChildrenProps<HeaderButtonProps>) => {
  const styles = cn(
    'group/header-button relative flex items-center rounded-lg2 border max-w-full font-medium cursor-pointer disabled:cursor-not-allowed  hover:not-disabled:bg-accent-interactions-lighter hover:not-disabled:border-accent-interactions-light border-iron',
    configButton(buttonType),
    isActive &&
      'not-disabled:bg-accent-interactions-lighter not-disabled:border-accent-interactions-light',
    transitionClass,
    className
  );

  return (
    <button className={styles} {...props} disabled={loading}>
      {loading && (
        <LoaderCircle
          className={cn(
            'animate-spin-pulse text-accent-normal absolute left-1/2 z-20 h-5 w-5 shrink-0 -translate-x-1/2'
          )}
        />
      )}

      {isMessage && (
        <span className="bg-error-normal absolute top-[9px] right-2.5 z-10 h-[9px] w-[9px] rounded-full border border-white" />
      )}

      {appendClassIcon(
        leftIcon,
        cn(
          'transition duration-300 ease-in-out z-0 group-active/header-button:text-accent-normal group-disabled/header-button:opacity-30',
          {
            'text-accent-normal': isActive && !loading,
          },
          transitionClass
        )
      )}

      {text && (
        <span
          className={cn(
            'group-active/header-button:text-accent-normal z-10 group-disabled/header-button:opacity-30',
            isActive && !loading && 'text-accent-normal',

            transitionClass
          )}
        >
          {text}
        </span>
      )}

      {children}

      {appendClassIcon(
        rightIcon,
        cn(
          'ml-[15px] text-text-secondary group-disabled/header-button:opacity-30',
          {
            'rotate-180 ': isActive && !loading,
          },
          transitionClass
        )
      )}
    </button>
  );
};
