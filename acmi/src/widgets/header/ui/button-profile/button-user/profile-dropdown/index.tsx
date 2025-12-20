import Link from 'next/link';

import { cn } from '@/utils';

import { NavLinksType } from '../../../../model/user-nav-bar-config';

interface CurrentLinkProps {
  data: NavLinksType;
  className?: string;
  onClose?: () => void;
}

interface ProfileDropdownProps {
  className?: string;
  isDivide?: boolean;
  onClose?: () => void;
  data: NavLinksType[];
}

export const CurrentLink = ({ data, onClose, className }: CurrentLinkProps) => {
  const styleLink = cn(
    'flex items-center p-[15px] h-10 py-2 hover:bg-bg-secondary hover:text-accent-normal transition duration-300 ease-in-out',
    className
  );

  const handleClick = () => {
    onClose?.();
  };

  return (
    <Link href={data.href} onClick={handleClick} className={styleLink}>
      {data.label}
    </Link>
  );
};

export const ProfileDropdown = ({ data, onClose, className, isDivide }: ProfileDropdownProps) => {
  return (
    <div className={cn('bg-white', className)}>
      <div className="scroll-bar-mini flex h-[calc(100%-40px)] flex-col overflow-hidden">
        {data.map((item) => (
          <CurrentLink data={item} onClose={onClose} key={`link-${item.id}-${item.label}`} />
        ))}

        <div className="mt-[5px] px-[15px] py-[9px]">
          <span className="block h-px w-full bg-[#E2E5EA]"></span>
        </div>
      </div>

      <div className="flex flex-col">
        {isDivide && (
          <div className="w-full px-[15px] py-[9px]">
            <span className="block h-px w-full bg-[#E2E5EA]"></span>
          </div>
        )}

        <CurrentLink
          onClose={onClose}
          className="flex py-[15px]"
          data={{ id: '5', href: '', label: 'Sign out' }}
        />
      </div>
    </div>
  );
};
