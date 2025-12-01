import { cn } from '@/utils';
import { Cross } from '@/shared/icons';

import { BadgeButtonProps } from './types';

export const BadgeButton = ({ text, className, ...props }: BadgeButtonProps) => {
  const styles = cn(
    'group/badge flex items-center max-w-full text-[15px] leading-[1.2] text-accent-normal bg-accent-light gap-3 border border-accent-normal rounded-[8px] px-2.5 py-0.5 cursor-pointer',
    className
  );
  return (
    <button {...props} className={styles}>
      <span className="group-hover/badge:text-accent-interactions-dark group-active/badge:text-accent-interactions-darker min-w-2.5 shrink grow truncate transition duration-300 ease-in-out">
        {text}
      </span>
      <Cross className="text-accent-interactions-dark group-hover/badge:text-accent-interactions-darker h-4 w-4 shrink-0 transition duration-300 ease-in-out" />
    </button>
  );
};
