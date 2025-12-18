'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui';
import { ModalLogin } from '../modal-login';

export const ButtonLogin = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="max-w-24">
        Login
      </Button>

      <ModalLogin isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
