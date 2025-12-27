import { DropdownPlaceholder } from '@/types';

import { AppliedLabelProps } from '../label';
import { SwitchedItemType } from '../dropdown-items';

export type SelectProps<T> = {
  error?: string;
  value?: T | null;
  disabled?: boolean;
  className?: string;
  options: T[] | null;
  isLoading?: boolean;
  placeholder?: string;
  animationDuration?: number;
  itemType?: SwitchedItemType;
  onChange: (item: T | null) => void;
  onSearchChange?: (value: string) => void;
  placeholderDropdown?: DropdownPlaceholder;
} & AppliedLabelProps;
