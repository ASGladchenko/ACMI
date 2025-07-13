'use client';

import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { RemoveScroll } from 'react-remove-scroll';

import { ChildrenProps } from '@/types';

import { ModalProps } from './types';
import { cn } from '@/utils';

export const Modal = ({ isOpen, onClose, children, className }: ChildrenProps<ModalProps>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    ReactModal.setAppElement('body');
  }, []);

  const modalClass = cn(
    'absolute top-1/2 left-1/2 max-h-[calc(100dvh-40px)] max-w-[calc(100dvw-20px)] -translate-x-1/2 -translate-y-1/2 overflow-auto outline-none',
    className
  );

  if (!isClient) return null;

  if (!isOpen) return null;

  return (
    <RemoveScroll enabled={isOpen}>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        className={modalClass}
        onRequestClose={onClose}
        overlayClassName="fixed inset-0 bg-black-10 z-[1000] cursor-pointer"
      >
        {children}
      </ReactModal>
    </RemoveScroll>
  );
};
