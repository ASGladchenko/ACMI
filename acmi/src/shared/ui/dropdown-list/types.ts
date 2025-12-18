import { AnimationState } from '@/shared/types';

export type DropdownItem = {
  id: string | number;
};

interface RenderItemType<T> {
  RenderItem: (props: { item: T; index: number }) => React.ReactElement;
  renderArray?: never;
}

interface RenderArrayType<T> {
  RenderItem?: never;
  renderArray: (item: T[]) => React.ReactElement;
}

 interface DropdownBase<T> {
  error?: string;
  data: T[] | null;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  height?: string | number;
  animation: AnimationState;
  animationDuration?: number;
  containerClassName?: string;
  minHeight?: string | number;
  ref?: React.Ref<HTMLDivElement>;
}

export type DropdownListProps<T> = DropdownBase<T> & (RenderItemType<T> | RenderArrayType<T>);
