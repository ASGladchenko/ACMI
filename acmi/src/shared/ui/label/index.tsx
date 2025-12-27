import { cn } from '@/shared/utils';
import { ChildrenProps } from '@/types';

export type LabelProps = {
  label?: string;
  count?: string;
  className?: string;
  as?: 'label' | 'div';
};

export type AppliedLabelProps = Omit<LabelProps, 'as' | 'className' | 'count'> & {
  labelAs?: 'label' | 'div';
};

export const Label = ({
  label,
  count,
  children,
  className,
  as = 'div',
}: ChildrenProps<LabelProps>) => {
  if (!label) {
    return <>{children}</>;
  }

  const Component = as;

  return (
    <Component className={cn('flex w-full max-w-full flex-col gap-2', className)}>
      <div className="flex justify-between gap-2">
        <p className="font-inter text-text-primary text-[17px] leading-[1.3] font-bold">{label}</p>
        {count && (
          <p className="font-manrope text-text-secondary text-[15px] leading-[1.2]">{count}</p>
        )}
      </div>
      <div className="w-full max-w-full">{children}</div>
    </Component>
  );
};
