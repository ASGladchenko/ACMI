import { cn } from '@/utils';

import { HeaderButtonProps } from './types';
import { LoaderCircle } from '@/shared/icons';
import { cloneElement, isValidElement } from 'react';
import { configButton, configColor } from './config';

const transitionClasses = 'transition duration-300 ease-in-out';

export const HeaderButton = ({
  text,
  loading,
  disabled,
  isActive,
  leftIcon,
  className,
  isMessage,
  rightIcon,
  colorType = 'white',
  buttonType = 'square',
  ...props
}: HeaderButtonProps) => {
  const styles = cn(
    'group/header-button relative flex items-center rounded-lg2 text-[15px] leading-[1.2] border max-w-full bg-transparent font-medium cursor-pointer disabled:cursor-not-allowed',
    configColor(colorType, isActive),
    configButton(buttonType),
    isActive && 'not-disabled:bg-white',
    transitionClasses,
    className
  );

  const renderIcon = (icon: React.ReactElement | null | undefined, extraClasses: string) => {
    if (!icon || !isValidElement(icon)) return null;

    const element = icon as React.ReactElement<{ className?: string }>;

    return cloneElement(element, {
      className: cn(element.props.className, extraClasses),
    });
  };

  return (
    <button className={styles} {...props} disabled={loading || disabled}>
      {loading && (
        <LoaderCircle
          className={cn(
            'animate-spin-pulse text-accent-normal absolute left-1/2 z-20 h-5 w-5 shrink-0 -translate-x-1/2'
          )}
        />
      )}

      {isMessage && (
        <span className="bg-error-normal absolute top-[9px] right-2.5 z-10 h-[9px] w-[9px] rounded-full border border-white group-disabled/header-button:opacity-30" />
      )}

      {renderIcon(
        leftIcon,
        cn(
          'transition duration-300 ease-in-out z-0 group-disabled/header-button:opacity-30',
          {
            'text-text-secondary': colorType === 'gray',
            'text-accent-normal': isActive && !disabled && !loading,
          },
          transitionClasses
        )
      )}

      {text && (
        <span
          className={cn(
            'z-10 group-disabled/header-button:opacity-30',
            isActive && !disabled && !loading && 'text-accent-normal',

            transitionClasses
          )}
        >
          {text}
        </span>
      )}

      {renderIcon(
        rightIcon,
        cn(
          'ml-[15px] group-disabled/header-button:opacity-30 text-white',
          {
            'rotate-180 text-text-secondary': isActive && !disabled && !loading,
            'text-text-secondary': colorType === 'gray',
          },
          transitionClasses
        )
      )}
    </button>
  );
};
