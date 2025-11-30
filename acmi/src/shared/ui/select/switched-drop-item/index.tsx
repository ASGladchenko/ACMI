import { ArrowDown } from '@/shared/icons';

import {
  ItemExtend,
  DropItemBase,
  DropItemCheckbox,
  DropDownItemProps,
} from '../../dropdown-items';

export type SwitchedItemType = 'checkbox' | 'base' | 'plane';

export interface SwitchedDropItemProps<T extends ItemExtend> extends DropDownItemProps<T> {
  type: SwitchedItemType;
}

export const SwitchedDropItem = <T extends ItemExtend>({
  type,
  ...props
}: SwitchedDropItemProps<T>) => {
  switch (type) {
    case 'checkbox':
      return <DropItemCheckbox {...props} />;
    case 'plane':
      return <DropItemBase {...props} Icon={ArrowDown} />;
    default:
      return <DropItemBase {...props} />;
  }
};
