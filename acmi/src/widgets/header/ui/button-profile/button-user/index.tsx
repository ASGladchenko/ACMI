'use client';

import { Profile } from '@/shared/assets';
import { AnimationState } from '@/shared/types';
import { DropdownList, HeaderButton } from '@/shared/ui';

import { ProfileDropdown } from './profile-dropdown';
import { navLinks, NavLinksType } from '../../../model/user-nav-bar-config';

interface ButtonUserProps {
  isOpen: boolean;
  duration: number;
  animation: AnimationState;
  onClose: (open: boolean) => void;
}

export const ButtonUser = ({ isOpen, onClose, duration, animation }: ButtonUserProps) => {
  return (
    <>
      <HeaderButton
        onClick={() => onClose(!isOpen)}
        leftIcon={<Profile width={20} height={20} />}
      />

      <DropdownList<NavLinksType>
        height={246}
        data={navLinks}
        animation={animation}
        animationDuration={duration}
        containerClassName="flex flex-col"
        className="right-0 mt-1 w-[180px]"
        renderArray={(data) => <ProfileDropdown data={data} onClose={() => onClose(false)} />}
      />
    </>
  );
};
