'use client';

import { cn } from '@/shared/utils';

import { Label, AppliedLabelProps } from '../label';

export type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  type?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  containerClass?: string;
  error?: string | boolean;
  height?: string | number;
  textAreaClassName?: string;
  minHeight?: string | number;
  ref?: React.Ref<HTMLTextAreaElement>;
  onChange: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & AppliedLabelProps;

export const TextArea = ({
  label,
  error,
  value,
  labelAs,
  minHeight,
  className,
  maxLength,
  height = 150,
  containerClass,
  textAreaClassName,
  onChange,
  ...rest
}: TextAreaProps) => {
  const isError = Boolean(error);

  const wrapperClassName = cn(
    'flex flex-col gap-1 w-full max-w-full outline-none',
    rest.disabled && 'cursor-not-allowed',
    !label && className
  );

  const containerClassName = cn(
    'flex gap-2.5 cursor-pointer border border-iron bg-white text-text-primary px-[15px] py-[7px] rounded-lg2 items-center transition-all duration-100 ease-linear max-w-full ',
    isError && 'border-error-normal ',
    rest.disabled && 'cursor-not-allowed bg-bg-secondary text-text-secondary',
    !isError && !rest.disabled && 'hover:border-text-additional',
    !isError && !rest.disabled && 'has-[textarea:focus]:border-accent-interactions-dark',
    containerClass
  );

  const textClassName = cn(
    'outline-none text-text-primary flex grow shrink h-[30px] min-w-0 bg-transparent placeholder:text-text-secondary transition-all duration-100 ease-linear max-w-full placeholder:text-ellipsis placeholder-shown:text-ellipsis vertical-middle min-h-[30px] resize-none leading-[30px] scroll-bar-mini',
    rest.readOnly && !rest.disabled && 'cursor-pointer',
    textAreaClassName
  );

  const InnerLabel = label ? 'div' : 'label';

  const count = maxLength ? `${value?.length ?? 0} / ${maxLength}` : undefined;

  return (
    <Label as={labelAs} className={className} label={label} count={count}>
      <InnerLabel className={wrapperClassName}>
        <div className={containerClassName}>
          <textarea
            {...rest}
            value={value}
            maxLength={maxLength}
            className={textClassName}
            style={{ height, minHeight, ...rest.style }}
            onChange={(e) => onChange?.(e.target.value, e)}
          />
        </div>

        {isError && typeof error === 'string' && (
          <span className="text-error-normal font-manrope max-w-full text-[13px] leading-[1.2]">
            {error}
          </span>
        )}
      </InnerLabel>
    </Label>
  );
};
