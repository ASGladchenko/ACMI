import { useState, useCallback } from 'react';

import { useOutsideClick } from '@/hooks';
import { OutsideClickRef } from '@/shared/types';

import { useDelayMount } from '../useDelayMount';

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

  const { animationState } = useDelayMount(isOpen, {
    exitDuration: delayUnmount,
  });

  const actualRefs = Array.isArray(refs) ? refs : refs ? [refs] : [];

  const onToggleSelect = useCallback(
    (isOpen: boolean) => {
      if (disabled) return;

      setIsOpen(isOpen);
    },
    [disabled]
  );

  useOutsideClick(() => {
    outSideClick?.(isOpen);
  }, actualRefs);

  return { isOpen, animation: animationState, onToggleSelect };
};
