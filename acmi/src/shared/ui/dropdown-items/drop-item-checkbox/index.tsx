import { Checkbox } from '../../checkbox';
import { ItemExtend, DropDownItemProps } from '../types';

export const DropItemCheckbox = <T extends ItemExtend>({
  item,
  active,
  onClick,
  disabled,
}: DropDownItemProps<T>) => {
  const isActive = Boolean(active) && Boolean(active && active.id === item.id);

  return (
    <Checkbox
      label={item.label}
      checked={isActive}
      disabled={disabled}
      className="hover:bg-bg-secondary has-[input:focus]:bg-bg-secondary px-[15px] py-2.5 transition-colors duration-200"
      onChange={() => {
        onClick(item);
      }}
    />
  );
};
