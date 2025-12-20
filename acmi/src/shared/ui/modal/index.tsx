'use client';

import { useState, useEffect } from 'react';

import ReactModal from 'react-modal';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/shared/utils';
import { ChildrenProps } from '@/types';
import { useDelayMount } from '@/shared/hooks';

import { ModalProps } from './types';

const duration = 1500;

export const Modal = ({ isOpen, onClose, children, className }: ChildrenProps<ModalProps>) => {
  const [isClient, setIsClient] = useState(false);

  const { animationState, isMounted } = useDelayMount(isOpen, {
    exitDuration: duration,
  });

  useEffect(() => {
    setIsClient(true);
    ReactModal.setAppElement('body');
  }, []);

  const modalClass = cn(
    'absolute top-1/2 left-1/2 max-h-[calc(100dvh-40px)] max-w-[calc(100dvw-20px)] -translate-x-1/2 -translate-y-1/2 overflow-auto outline-none',
    className
  );

  if (!isClient) return null;

  if (!isMounted) return null;

  return (
    <RemoveScroll enabled={isMounted}>
      <ReactModal
        isOpen={isMounted}
        ariaHideApp={false}
        className={modalClass}
        onRequestClose={onClose}
        style={{
          overlay: {
            '--fade-in': `${duration}ms`,
            '--fade-out': `${duration}ms`,
          } as React.CSSProperties,
        }}
        overlayClassName={cn(
          'fixed inset-0 bg-black-10 z-[1000] cursor-pointer',
          animationState === 'mounting' && 'animate-fadeIn',
          animationState === 'unmounting' && 'animate-fadeOut'
        )}
      >
        {children}
      </ReactModal>
    </RemoveScroll>
  );
};
