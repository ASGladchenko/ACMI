import { cn } from '@/utils';
import { LoaderCircle } from '@/shared/assets';

import { sizeToCSSString } from './helpers';
import { DropdownItem, DropdownListProps } from './types';

export const DropdownList = <T extends DropdownItem>({
  ref,
  data,
  error,
  animation,
  isLoading,
  className,
  RenderItem,
  renderArray,
  height = 140,
  containerClassName,
  animationDuration = 400,
}: DropdownListProps<T>) => {
  if (animation === 'unmounted') {
    return null;
  }

  const isData = (data: T[] | null): data is T[] => Boolean(data) && Boolean(data?.length);

  const listClassName = cn(
    'absolute z-10 h-[var(--list-height,80px)] top-full w-full rounded-lg2 border border-iron bg-white shadow-md mt-0.5 py-2.5 shadow-lg-blue-dark',
    animation === 'mounting' && 'animate-dropdown-in',
    animation === 'unmounting' && 'animate-dropdown-out',
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
      <div
        className={cn(
          'scroll-bar-mini h-full w-full overflow-y-auto',
          (animation === 'unmounting' || animation === 'mounting') && 'overflow-hidden',
          containerClassName
        )}
      >
        {isLoading && (
          <div className="flex h-full items-center justify-center py-4">
            <LoaderCircle className="text-accent-normal animate-spin-pulse h-16 w-auto max-w-full shrink duration-1000" />
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
          RenderItem &&
          data.map((item, idx) => <RenderItem index={idx} key={item.id} item={item} />)}

        {isData(data) && !isLoading && !error && renderArray && renderArray(data)}
      </div>
    </div>
  );
};
