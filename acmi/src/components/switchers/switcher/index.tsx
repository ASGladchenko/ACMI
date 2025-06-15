import { cn } from '@/utils';

export interface SwitcherProps {
  isActive: boolean;
  disabled?: boolean;
  error?: string;
  onClick?: (isActive: boolean) => void;
}

export const Switcher = ({ isActive, disabled, onClick, error }: SwitcherProps) => {
  const switcherClass = cn('p-1 relative cursor-pointer rounded-full w-16 h-[30px] ', {
    'bg-gray-metallic': !isActive,
    'bg-blue-dark cursor-pointer': isActive,
    'cursor-not-allowed opacity-50': disabled,
    'border border-red-500': error,
  });

  const switcherButtonClass = cn(
    'absolute left-1 top-1/2 -translate-y-1/2 bg-blue-dark shrink-0 h-[22px] w-[22px] rounded-full transition-all duration-200 ease-in-out',
    {
      'bg-gray-metallic left-[calc(100%-4px)] -translate-x-full': isActive,
      'cursor-not-allowed': disabled,
      'bg-red-500': error,
    }
  );

  const handleClick = () => {
    if (disabled) return;

    onClick?.(!isActive);
  };
  return (
    <div onClick={handleClick} className={switcherClass}>
      <div className={switcherButtonClass} />
    </div>
  );
};
