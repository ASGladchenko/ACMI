'use client';

import { HeaderButton } from '@/shared/ui';

import { HeaderLeonModal } from '../header-leon-modal';
import { useModalLeonStore } from '../../model/modal-store';

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
