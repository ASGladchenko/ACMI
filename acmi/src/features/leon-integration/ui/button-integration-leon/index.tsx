'use client';

import { HeaderButton } from '@/shared/ui';
import { useModalLeonStore } from '@/store';

import { HeaderLeonModal } from '../header-leon-modal';

export const ButtonIntegrationLeon = ({
  className,
  showModal = true,
}: {
  className?: string;
  showModal?: boolean;
}) => {
  const { isOpenLeonModal, setIsOpenLeonModal } = useModalLeonStore();

  return (
    <>
      <HeaderButton
        buttonType="normal"
        className={className}
        text="Become a Provider"
        onClick={() => setIsOpenLeonModal(true)}
      />

      {showModal && (
        <HeaderLeonModal isOpen={isOpenLeonModal} onClose={() => setIsOpenLeonModal(false)} />
      )}
    </>
  );
};
