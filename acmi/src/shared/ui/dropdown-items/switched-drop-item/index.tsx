import { Plane } from '@/shared/assets';

import {
  ItemExtend,
  DropItemBase,
  DropItemCheckbox,
  DropDownItemProps,
} from '../../dropdown-items';

export type SwitchedItemType = 'base' | 'checkbox' | 'plane';

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
      return <DropItemBase {...props} Icon={Plane} iconClassName="text-text-secondary" />;
    default:
      return <DropItemBase {...props} />;
  }
};
