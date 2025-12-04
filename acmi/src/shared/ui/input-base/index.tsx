import { cn } from '@/utils';

export interface InputBaseProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  type?: string;
  value?: string;
  isActive?: boolean;
  inputClass?: string;
  placeholder?: string;
  containerClass?: string;
  error?: string | boolean;
  LeftItem?: React.ReactNode;
  RightItem?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBase = ({
  value,
  error,
  isActive,
  LeftItem,
  onChange,
  className,
  RightItem,
  inputClass,
  containerClass,
  ...rest
}: InputBaseProps) => {
  const isError = Boolean(error);

  const wrapperClassName = cn(
    'flex flex-col gap-1 ',
    rest.disabled && 'cursor-not-allowed',
    className
  );

  const containerClassName = cn(
    'flex gap-2.5 cursor-pointer border border-iron bg-white text-text-primary px-[15px] py-[7px] rounded-lg2 items-center transition-all duration-100 ease-linear',
    isError && 'border-error-normal',
    rest.disabled && 'cursor-not-allowed bg-bg-secondary text-text-secondary',
    !isError && !rest.disabled && !isActive && 'hover:border-text-additional',
    !isError && !rest.disabled && isActive && 'border-accent-interactions-dark',
    !isError && !rest.disabled && 'has-[input:focus]:border-accent-interactions-dark',
    containerClass
  );

  const inputClassName = cn(
    'outline-none text-text-primary flex grow shrink h-[30px] min-w-2.50 bg-transparent placeholder:text-text-secondary transition-all duration-100 ease-linear',
    rest.readOnly && !rest.disabled && 'cursor-pointer',
    inputClass
  );

  return (
    <label className={wrapperClassName}>
      <div className={containerClassName}>
        {LeftItem && LeftItem}

        <input
          {...rest}
          value={value}
          className={inputClassName}
          onChange={(e) => onChange?.(e.target.value, e)}
        />

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
