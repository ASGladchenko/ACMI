'use client';

import { useState } from 'react';

import { HeaderButton } from '@/shared/ui';

import { ModalLeonIntegration } from '../modal-leon-integration';

export const BecomeProvider = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderButton text="Become a Provider" onClick={() => setIsOpen(true)} />
      <ModalLeonIntegration isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
