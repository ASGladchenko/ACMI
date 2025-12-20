import { SwitchedItemType } from '../dropdown-items';
export interface MultiSelectProps<T> {
  error?: string;
  data: T[] | null;
  disabled?: boolean;
  isLoading?: boolean;
  selected?: T[] | null;
  placeholder?: string;
  animationDuration?: number;
  itemType?: SwitchedItemType;
  onSelect: (item: T[] | null) => void;
}
