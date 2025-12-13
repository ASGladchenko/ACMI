'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { appendClassIcon, cn } from '@/utils';
import { transitionClass } from '@/shared/constants';

import { NavbarProps } from './types';
import { hasNavLinks, navLinks } from '../../model/nav-bar-config';

export const Navbar = ({ role, className }: NavbarProps) => {
  const pathname = usePathname();

  if (!hasNavLinks(role, navLinks)) {
    return null;
  }

  const roleLinks = navLinks[role];

  return (
    <nav className={cn('flex max-w-max items-center gap-[5px]', className)}>
      {roleLinks.map((nav) => {
        const isActive = pathname === nav.href;

        return (
          <Link
            href={nav.href}
            key={nav.label}
            className={cn(
              'rounded-lg2 flex items-center gap-2.5 border border-transparent p-[9px_19px]',
              {
                'text-accent-normal cursor-default': isActive,
                'hover:bg-accent-interactions-lighter hover:border-accent-interactions-light':
                  !isActive,
              },
              transitionClass
            )}
          >
            {appendClassIcon(
              nav.icon as React.ReactElement,
              cn('w-6 h-6', { 'text-accent-normal': isActive })
            )}

            {nav.label}
          </Link>
        );
      })}
    </nav>
  );
};
