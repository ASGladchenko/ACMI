import { useState, useCallback } from 'react';

import { useOutsideClick } from '@/hooks';
import { OutsideClickRef } from '@/shared/types';

export type AnimationState = 'mount' | 'unmount';

export interface UseSelectProps {
  disabled?: boolean;
  initialOpen?: boolean;
  delayUnmount?: number;
  refs?: OutsideClickRef;
  outSideClick?: (isOpen: boolean) => void;
}

export const useSelect = ({
  refs,
  disabled,
  outSideClick,
  delayUnmount = 150,
  initialOpen = false,
}: UseSelectProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [animationState, setAnimationState] = useState<AnimationState>(
    !initialOpen ? 'mount' : 'unmount'
  );

  const actualRefs = Array.isArray(refs) ? refs : refs ? [refs] : [];

  const onToggleSelect = useCallback(
    (isOpen: boolean) => {
      if (disabled) return;

      if (isOpen) {
        setAnimationState('mount');
        setIsOpen(true);
      }

      if (!isOpen) {
        setAnimationState('unmount');
        setTimeout(() => {
          setIsOpen(false);
        }, delayUnmount);
      }
    },
    [delayUnmount, disabled]
  );

  useOutsideClick(() => {
    outSideClick?.(isOpen);
  }, actualRefs);

  return { isOpen, animation: animationState, onToggleSelect };
};
