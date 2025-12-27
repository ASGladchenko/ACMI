import { cn } from '@/shared/utils';
import { CheckCheckbox } from '@/shared/assets';

import { ItemExtend, DropDownItemProps } from '../types';

export const DropItemBase = <T extends ItemExtend>({
  item,
  Icon,
  onClick,
  isActive,
  disabled,
  iconClassName,
}: DropDownItemProps<T>) => {
  const btnClass = cn(
    'focus:outline-none bg-transparent enabled:hover:bg-bg-secondary enabled:cursor-pointer enabled:focus:bg-bg-secondary flex items-center justify-between px-[15px] py-2 w-full text-left transition-colors duration-200 gap-[15px] disabled:cursor-not-allowed disabled:text-text-additional'
  );

  return (
    <button disabled={disabled} className={btnClass} onClick={() => onClick(item)}>
      {Icon && <Icon className={cn('h-6 w-6 shrink-0', iconClassName)} />}

      <span className="min-w-0 shrink grow truncate">{item.label}</span>

      {isActive && <CheckCheckbox className="text-accent-interactions-dark h-6 w-6" />}
    </button>
  );
};
