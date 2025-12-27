import { DropdownPlaceholder } from '@/types';

import { AppliedLabelProps } from '../label';
import { SwitchedItemType } from '../dropdown-items';

export type MultiSelectProps<T> = {
  error?: string;
  disabled?: boolean;
  value?: T[] | null;
  className?: string;
  options: T[] | null;
  isLoading?: boolean;
  placeholder?: string;
  withCount?: boolean;
  animationDuration?: number;
  itemType?: SwitchedItemType;
  onChange: (item: T[] | null) => void;
  placeholderDropdown?: DropdownPlaceholder;
} & Omit<AppliedLabelProps, 'labelAs'>;
