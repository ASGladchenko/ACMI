import { cn } from '@/utils';
import { CheckCheckbox } from '@/shared/icons';

import { ItemExtend, DropDownItemProps } from '../types';

export const DropItemBase = <T extends ItemExtend>({
  item,
  active,
  onClick,
  disabled,
}: DropDownItemProps<T>) => {
  const isActive = Boolean(active) && Boolean(active && active.id === item.id);

  const btnClass = cn(
    'focus:outline-none bg-transparent enabled:hover:bg-bg-secondary enabled:cursor-pointer enabled:focus:bg-bg-secondary flex items-center justify-between px-[15px] py-2 w-full text-left transition-colors duration-200 gap-2 disabled:cursor-not-allowed disabled:text-text-additional'
  );

  return (
    <button disabled={disabled} className={btnClass} onClick={() => onClick(item)}>
      <span className="min-w-[0] shrink grow truncate">{item.label}</span>

      {isActive && <CheckCheckbox className="text-accent-interactions-dark h-6 w-6 shrink-0" />}
    </button>
  );
};
