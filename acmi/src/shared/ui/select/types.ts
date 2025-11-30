import { SwitchedItemType } from './switched-drop-item/index';

export type SelectOption = {
  label: string;
  id: string | number;
};

export interface SelectProps<T> {
  error?: string;
  data: T[] | null;
  disabled?: boolean;
  isLoading?: boolean;
  selected?: T | null;
  placeholder?: string;
  animationDuration?: number;
  itemType?: SwitchedItemType;
  onSelect: (item: T | null) => void;
}
