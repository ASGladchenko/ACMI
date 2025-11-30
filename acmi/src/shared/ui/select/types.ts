import { SwitchedItemType } from './switched-drop-item/index';

export type SelectOption = {
  label: string;
  id: string | number;
};

export interface SelectNewProps<T> {
  data: T[];
  disabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  selectedItem?: T | null;
  error?: string | boolean;
  animationDuration?: number;
  itemType?: SwitchedItemType;
  onSelectItem: (item: T | null) => void;
}
