'use client';

import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { RemoveScroll } from 'react-remove-scroll';

import { ChildrenProps } from '@/types';

import { ModalProps } from './types';

export const Modal = ({ isOpen, onClose, children }: ChildrenProps<ModalProps>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    ReactModal.setAppElement('body');
  }, []);

  if (!isClient) return null;

  return (
    <RemoveScroll enabled={isOpen}>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={onClose}
        className="absolute top-1/2 left-1/2 max-h-[calc(100dvh-40px)] max-w-[calc(100dvw-40px)] -translate-x-1/2 -translate-y-1/2 overflow-auto"
        overlayClassName="fixed inset-0 bg-black-10 z-[1000] cursor-pointer"
      >
        {children}
      </ReactModal>
    </RemoveScroll>
  );
};
