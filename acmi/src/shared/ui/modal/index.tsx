'use client';

import { useState, useEffect } from 'react';

import ReactModal from 'react-modal';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/shared/utils';
import { ChildrenProps } from '@/types';
import { useDelayMount } from '@/shared/hooks';

import { ModalProps } from './types';

export const Modal = ({
  style,
  isOpen,
  onClose,
  children,
  className,
  contentRef,
  duration = 330,
  overlayClassName,
}: ChildrenProps<ModalProps>) => {
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
    typeof className === 'function' ? className(animationState) : className
  );

  if (!isClient) return null;
  if (!isOpen && !isMounted) return null;

  return (
    <ReactModal
      ariaHideApp={false}
      className={modalClass}
      contentRef={contentRef}
      onRequestClose={onClose}
      isOpen={isOpen || isMounted}
      style={{
        overlay: {
          '--fade-in': `${duration}ms`,
          '--fade-out': `${duration}ms`,
        } as React.CSSProperties,
        ...(style ?? {}),
      }}
      overlayClassName={cn(
        'fixed inset-0 bg-[#353647]/60 z-[1000] cursor-pointer animate-fadeIn',
        animationState === 'unmounting' && 'animate-fadeOut',
        overlayClassName
      )}
    >
      <RemoveScroll enabled={isOpen} className="w-full h-full">
        {children}
      </RemoveScroll>
    </ReactModal>
  );
};
