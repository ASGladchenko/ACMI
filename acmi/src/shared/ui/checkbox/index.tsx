import { cn } from '@/utils';
import { CheckCheckbox } from '@/shared/icons';

import { CheckboxProps } from './types';

const transitionClasses = 'transition duration-300 ease-in-out';

export const Checkbox = ({
  label,
  disabled,
  className,
  inputClassName,
  type = 'checkbox',
  ...props
}: CheckboxProps) => {
  const typeRadio = type === 'radio';
  const typeCheckbox = type === 'checkbox';

  const styles = cn(
    'group/label-check flex cursor-pointer items-center gap-[15px] max-w-full',
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
    'visual-check flex h-5 w-5 items-center justify-center border-2 border-[#DADBDD] bg-white',
    {
      'rounded-full': typeRadio,
      'rounded-sm': typeCheckbox,
      'group-hover/label-check:border-text-secondary': !disabled,
      'border-[#DADBDD] bg-[#EEEFF1]': disabled,
    },
    transitionClasses
  );

  return (
    <label className={styles}>
      <input type={type} className={stylesInput} {...props} disabled={disabled} />

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
  );
};
