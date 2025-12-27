'use client';
import { memo } from 'react';

import { cn } from '@/utils';
import { CheckCheckbox } from '@/shared/assets';

import { CheckboxCheckOnChange, CheckboxProps, CheckboxRadioOnChange } from './types';

const transitionClasses = 'transition duration-300 ease-in-out';

export const Checkbox = ({
  label,
  value,
  error,
  disabled,
  onChange,
  className,
  inputClassName,
  type = 'checkbox',
  styleType = 'check',
  ...props
}: CheckboxProps) => {
  const typeRadio = styleType === 'circle';
  const typeCheckbox = styleType === 'check';

  const styles = cn(
    'flex flex-col  max-w-full',
    transitionClasses,
    className,
    disabled && 'cursor-not-allowed hover:bg-transparent'
  );

  const stylesInput = cn(
    'appearance-none absolute h-0 w-0 opacity-0 checked:[&+.visual-check]:border-accent-normal checked:[&+.visual-check>*]:appearance-auto checked:[&+.visual-check>*]:opacity-100',
    typeCheckbox && 'checked:[&+.visual-check]:bg-accent-normal',
    inputClassName
  );

  const stylesVisualCheck = cn(
    'visual-check flex h-5 w-5 items-center justify-center border-2 border-[#DADBDD] bg-white shrink-0',
    {
      'rounded-full': typeRadio,
      'rounded-sm': typeCheckbox,
      'group-hover/label-check:border-text-secondary': !disabled,
      'border-[#DADBDD] bg-[#EEEFF1]': disabled,
    },
    transitionClasses
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'checkbox') {
      (onChange as CheckboxCheckOnChange)(e.target.checked, e);
    } else if (type === 'radio') {
      (onChange as CheckboxRadioOnChange)(e.target.value as string, e);
    }
  };

  const val = type === 'radio' ? value : undefined;

  return (
    <div className={styles}>
      <label
        className={cn(
          'group/label-check checkbox-label flex max-w-full cursor-pointer items-center gap-[15px]'
        )}
      >
        <input
          {...props}
          value={val}
          type={type}
          disabled={disabled}
          onChange={handleChange}
          className={stylesInput}
        />

        <span className={stylesVisualCheck}>
          {typeCheckbox && (
            <CheckCheckbox
              width={13}
              height={10}
              className={cn('shrink-0 appearance-none text-white opacity-0', transitionClasses)}
            />
          )}

          {typeRadio && (
            <span
              className={cn('bg-accent-normal h-3 w-3 rounded-full opacity-0', transitionClasses)}
            />
          )}
        </span>

        {label && (
          <span
            className={cn(
              'text-text-primary truncate',
              disabled && 'text-text-additional',
              transitionClasses
            )}
          >
            {label}
          </span>
        )}
      </label>

      {Boolean(error) && (
        <span
          className={cn(
            'text-error-normal font-manrope error-check max-w-full text-[13px] leading-[1.2]'
          )}
        >
          {error}
        </span>
      )}
    </div>
  );
};

Checkbox.Memo = memo(Checkbox);

Checkbox.displayName = 'Checkbox';
