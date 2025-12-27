'use client';

import ReactModal from 'react-modal';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/shared/utils';
import { ChildrenProps } from '@/types';
import { useHydrated, useDelayMount } from '@/shared/hooks';

import { ModalProps } from './types';

export const Modal = ({
  id,
  style,
  isOpen,
  onClose,
  children,
  className,
  contentRef,
  duration = 330,
  overlayClassName,
  shouldReturnFocusAfterClose = true,
}: ChildrenProps<ModalProps>) => {
  const isHydrated = useHydrated();

  const { animationState, isMounted } = useDelayMount(isOpen, {
    exitDuration: duration,
  });

  if (!isHydrated) return null;

  const modalClass = cn(
    'absolute top-1/2 left-1/2 max-h-[calc(100dvh-40px)] max-w-[calc(100dvw-20px)] -translate-x-1/2 -translate-y-1/2 overflow-auto outline-none',
    typeof className === 'function' ? className(animationState) : className
  );

  if (!isOpen && !isMounted) return null;

  return (
    <ReactModal
      id={id}
      shouldCloseOnEsc
      ariaHideApp={false}
      className={modalClass}
      contentRef={contentRef}
      onRequestClose={onClose}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      appElement={document.body}
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
      <RemoveScroll enabled={isOpen} className="h-full w-full">
        {children}
      </RemoveScroll>
    </ReactModal>
  );
};
