'use client';

import { useRef, useState, useEffect } from 'react';

import { Role } from '@/shared/types';
import { useSelect, useWindowWidth } from '@/shared/hooks';

import { ButtonUser } from './button-user';
import { ButtonBurger } from './button-burger';

const duration = 330;

export const ButtonProfile = ({ isMain, role }: { isMain?: boolean; role?: Role }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isOpen, animation, onToggleSelect } = useSelect({
    refs: buttonRef,
    delayUnmount: duration,
    outSideClick: () => {
      onToggleSelect(false);
    },
  });

  const laptopMore = width > 960;

  //TODO: found out hydration
  if (!isMounted) {
    return null;
  }

  return (
    <div ref={buttonRef} className="relative">
      {laptopMore && (
        <ButtonUser
          isOpen={isOpen}
          duration={duration}
          animation={animation}
          onClose={onToggleSelect}
        />
      )}

      {!laptopMore && <ButtonBurger isMain={isMain} role={role} />}
    </div>
  );
};
