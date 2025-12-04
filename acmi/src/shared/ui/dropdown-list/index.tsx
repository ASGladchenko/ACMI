import { cn } from '@/utils';
import { LoaderCircle } from '@/shared/icons';
import { AnimationState } from '@/shared/hooks';

import { sizeToCSSString } from './helpers';

export type DropdownItem = {
  label: string;
};

export interface DropdownListProps<T> {
  error?: string;
  isOpen: boolean;
  data: T[] | null;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  height?: string | number;
  animation: AnimationState;
  animationDuration?: number;
  minHeight?: string | number;
  ref?: React.Ref<HTMLDivElement>;
  RenderItem: (props: { item: T; index: number }) => React.ReactElement;
}

export const DropdownList = <T extends DropdownItem>({
  ref,
  data,
  error,
  isOpen,
  animation,
  isLoading,
  className,
  RenderItem,
  height = 140,
  animationDuration = 400,
}: DropdownListProps<T>) => {
  if (!isOpen) {
    return null;
  }

  const isData = (data: T[] | null): data is T[] => Boolean(data) && Boolean(data?.length);

  const listClassName = cn(
    'absolute z-10 h-[var(--list-height,80px)] top-full w-full rounded-lg2 border border-iron bg-white shadow-md mt-0.5 py-2.5 shadow-lg-blue-dark',
    animation === 'mount' ? 'animate-dropdown-in' : 'animate-dropdown-out',
    className
  );

  return (
    <div
      ref={ref}
      className={listClassName}
      style={
        {
          '--list-height': sizeToCSSString(height),
          '--duration-dropdown': `${animationDuration}ms`,
        } as React.CSSProperties
      }
    >
      <div className="scroll-bar-mini h-full w-full overflow-y-auto">
        {isLoading && (
          <div className="flex h-full items-center justify-center py-4">
            <LoaderCircle className="text-accent-normal animate-spin-pulse h-[64px] w-auto max-w-full shrink duration-1000" />
          </div>
        )}

        {error && !isLoading && (
          <div className="text-error-normal flex h-full items-center justify-center px-4 py-2 font-semibold">
            {error}
          </div>
        )}

        {!isData(data) && !isLoading && !error && (
          <div className="text-text-secondary flex h-full items-center justify-center px-4 py-2 font-semibold">
            No options
          </div>
        )}

        {isData(data) &&
          !isLoading &&
          !error &&
          data.map((item, idx) => <RenderItem index={idx} key={item.label} item={item} />)}
      </div>
    </div>
  );
};
