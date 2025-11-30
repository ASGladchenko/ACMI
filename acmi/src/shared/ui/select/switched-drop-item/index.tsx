import {
  ItemExtend,
  DropItemBase,
  DropItemCheckbox,
  DropDownItemProps,
} from '../../dropdown-items';

export type SwitchedItemType = 'checkbox' | 'base';

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
    default:
      return <DropItemBase {...props} />;
  }
};
