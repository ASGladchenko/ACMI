'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { appendClassIcon, cn } from '@/shared/utils';

import { transitionClass } from '@/shared/constants';

import { HeaderLinksProps } from './types';

export const HeaderLinks = ({ links, className }: HeaderLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn('flex max-w-max items-center gap-[5px]', className)}>
      {links.map((nav) => {
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
