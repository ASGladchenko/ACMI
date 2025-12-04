import { cn } from '@/utils';
import { AnimationState } from '@/shared/hooks';

import { SelectOption } from '../types';
import { BadgeButton } from '../../badge-button';

export interface MultiSelectItemProps<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  type?: string;
  value?: string;
  isActive?: boolean;
  inputClass?: string;
  placeholder?: string;
  selected: T[] | null;
  containerClass?: string;
  error?: string | boolean;
  animationDuration: number;
  animation: AnimationState;
  LeftItem?: React.ReactNode;
  RightItem?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  onSelectItem: (selected: T[] | null) => void;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MultiSelectItem = <T extends SelectOption>({
  value,
  error,
  selected,
  isActive,
  LeftItem,
  onChange,
  animation,
  className,
  RightItem,
  inputClass,
  onSelectItem,
  containerClass,
  animationDuration,
  ...rest
}: MultiSelectItemProps<T>) => {
  const isError = Boolean(error);
  const isSelected = Boolean(selected && selected.length > 0);

  const onBadgeClick = (item: T) => {
    const newList = (selected || []).filter((old) => old.id !== item.id);
    onSelectItem(newList);
  };

  const wrapperClassName = cn(
    'flex flex-col gap-1 max-w-full',
    rest.disabled && 'cursor-not-allowed',
    className
  );

  const containerClassName = cn(
    'flex gap-2.5 cursor-pointer border border-iron bg-white text-text-primary px-[15px] py-[7px] rounded-lg2 transition-all duration-200 ease-linear max-w-full shrink grow min-w-10',
    isError && 'border-error-normal',
    rest.disabled && 'cursor-not-allowed bg-bg-secondary text-text-secondary',
    !isError && !rest.disabled && !isActive && 'hover:border-text-additional',
    !isError && !rest.disabled && isActive && 'border-accent-interactions-dark',
    !isError && !rest.disabled && 'has-[input:focus]:border-accent-interactions-dark',
    containerClass
  );

  const inputClassName = cn(
    'outline-none text-text-primary flex grow shrink min-w-2.50 bg-transparent placeholder:text-text-secondary transition-all duration-100 linear h-[30px]',
    rest.readOnly && !rest.disabled && 'cursor-pointer',
    animation === 'mount' && isSelected && !isActive && 'animate-dropdown-in animation-delay-[10]',
    animation === 'unmount' && isSelected && 'animate-dropdown-out animation-delay-[10]',
    inputClass
  );

  return (
    <label className={wrapperClassName}>
      <div className={containerClassName}>
        {LeftItem && LeftItem}

        <div className="max-w-full min-w-10 shrink grow">
          <input
            {...rest}
            value={value}
            className={inputClassName}
            onChange={(e) => onChange?.(e.target.value, e)}
            style={
              {
                '--list-height': '30px',
                '--duration-dropdown': `${animationDuration * 1.2}ms`,
              } as React.CSSProperties
            }
          />

          {selected && selected.length > 0 && (
            <div
              className={cn('flex min-w-10 shrink grow flex-wrap gap-2 pt-3', !isActive && 'pt-0')}
            >
              {selected.map((item, idx) => (
                <BadgeButton
                  text={item.label}
                  key={`${item.label}-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onBadgeClick(item);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {RightItem && RightItem}
      </div>

      {isError && typeof error === 'string' && (
        <span className="text-error-normal font-manrope max-w-full text-[13px] leading-[1.2]">
          {error}
        </span>
      )}
    </label>
  );
};
