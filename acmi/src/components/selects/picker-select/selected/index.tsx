import { cn } from '@/utils';
import { ArrowDown } from '@/assets/svg';

import { IRenderSelectedProps, ISelectOption } from '../../select-logic/types';

export interface SelectedProps extends IRenderSelectedProps {
  isDisabled?: boolean;
}

export const Selected = ({ isOpen, option, setIsOpen, isDisabled }: SelectedProps) => {
  return (
    <div
      onClick={() => !isDisabled && setIsOpen(!isOpen)}
      className="border-blue-dark flex w-full max-w-[150px] cursor-pointer flex-col gap-1 bg-transparent px-1 py-1 text-[16px] leading-[24px]"
    >
      <div
        className="flex items-center justify-center gap-2"
        onClick={() => !isDisabled && setIsOpen(true)}
      >
        <span className="text-blue-dark text-nowrap">{(option as ISelectOption)?.text}</span>

        <ArrowDown className={cn('h-6 w-6 shrink-0 duration-200', isOpen && 'rotate-180')} />
      </div>
    </div>
  );
};
