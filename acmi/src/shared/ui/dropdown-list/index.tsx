import { cn } from '@/utils';
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
  isLoading?: boolean;
  animation: AnimationState;
  height?: string | number;
  animationDuration?: number;
  minHeight?: string | number;
  RenderItem: (props: { item: T; index: number }) => React.ReactElement;
}

export const DropdownList = <T extends DropdownItem>({
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
      className={listClassName}
      style={
        {
          '--list-height': sizeToCSSString(height),
          '--duration-dropdown': `${animationDuration}ms`,
        } as React.CSSProperties
      }
    >
      <div className="scroll-bar-mini h-full w-full overflow-y-auto">
        {isData(data) &&
          !isLoading &&
          data.map((item, idx) => <RenderItem index={idx} key={item.label} item={item} />)}

        {!isData(data) && !isLoading && !error && (
          <div className="text-text-secondary px-4 py-2 text-center">No options</div>
        )}

        {error && !isLoading && (
          <div className="text-text-secondary px-4 py-2 text-center">{error}</div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <div className="border-accent-interactions-dark h-5 w-5 animate-spin rounded-full border-4 border-t-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
};
