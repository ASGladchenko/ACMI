'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';
import { Role } from '@/shared/types';
import { useModalLeonStore } from '@/store';
import { useOutsideClick } from '@/shared/hooks';
import { Modal, RoleGuard, HeaderButton } from '@/shared/ui';
import { HeaderLeonModal, ButtonIntegrationLeon } from '@/features';

import { Burger } from './burger';
import { Navbar } from '../../navbar';
import { navLinks } from '../../../model/user-nav-bar-config';
import { ProfileDropdown } from '../button-user/profile-dropdown';

const duration = 400;

export const ButtonBurger = ({ isMain, role }: { isMain?: boolean; role?: Role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refContent = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { isOpenLeonModal, setIsOpenLeonModal } = useModalLeonStore();

  useEffect(() => {
    if (isOpenLeonModal) {
      setIsOpen(false);
    }
  }, [isOpenLeonModal]);

  useOutsideClick(() => {
    setIsOpen(false);
  }, [refContent, buttonRef]);

  return (
    <>
      <HeaderButton onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
        <Burger duration={duration * (4 / 3)} isOpen={isOpen} />
      </HeaderButton>

      <Modal
        isOpen={isOpen}
        duration={duration}
        onClose={() => setIsOpen(false)}
        style={{ content: { transitionDuration: `${duration}ms` } }}
        contentRef={(contentRef) => (refContent.current = contentRef)}
        overlayClassName={cn(
          'top-16 tablet:top-[74px] border-t border-iron',
          isMain && 'laptop:top-[84px]'
        )}
        className={(animation) =>
          cn(
            'easy-out tablet:w-[300px] top-0 right-0 left-[unset] h-full w-full translate-x-full translate-y-0 transition',
            animation === 'mounting' && 'translate-x-0',
            animation === 'mounted' && 'translate-x-0'
          )
        }
      >
        <div className={cn('tablet:w-[300px] flex h-full max-w-full flex-col bg-white py-2.5')}>
          <RoleGuard role={role} allow={[Role.USER]}>
            <div className="w-full px-[15px]">
              <ButtonIntegrationLeon className="mb-2.5 w-full" showModal={false} />
            </div>
          </RoleGuard>

          <Navbar
            type="burger"
            isIcon={false}
            role={Role.PROVIDER}
            className="max-w-[unset] flex-col items-start"
          />

          <ProfileDropdown data={navLinks} className="flex flex-1 flex-col" isDivide />
        </div>
      </Modal>

      <HeaderLeonModal isOpen={isOpenLeonModal} onClose={() => setIsOpenLeonModal(false)} />
    </>
  );
};
