import { useOutsideClick } from '@/hooks';
import { OutsideClickRef } from '@/shared/types';
import { useState, useCallback } from 'react';

export type AnimationState = 'mount' | 'unmount';

export interface UseSelectProps {
  delayMount?: number;
  initialOpen?: boolean;
  delayUnmount?: number;
  outSideClick?: (isOpen: boolean) => void;
  refs?: OutsideClickRef;
}

export const useSelect = ({
  refs,
  delayMount,
  outSideClick,
  delayUnmount = 150,
  initialOpen = false,
}: UseSelectProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [animationState, setAnimationState] = useState<AnimationState>('mount');

  const actualRefs = Array.isArray(refs) ? refs : refs ? [refs] : [];

  const onToggleSelect = useCallback(
    (isOpen: boolean) => {
      if (isOpen && !delayMount) {
        setAnimationState('mount');
        setIsOpen(true);
      }

      if (isOpen && delayMount) {
        setTimeout(() => {
          setAnimationState('mount');
          setIsOpen(true);
        }, delayMount);
      }
      if (!isOpen) {
        setAnimationState('unmount');
        setTimeout(() => {
          setIsOpen(false);
        }, delayUnmount);
      }
    },
    [delayUnmount, delayMount]
  );

  useOutsideClick(() => {
    outSideClick?.(isOpen);
  }, actualRefs);

  return { isOpen, animation: animationState, onToggleSelect };
};
