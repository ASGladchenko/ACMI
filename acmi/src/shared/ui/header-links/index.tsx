'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { appendClassIcon } from '@/utils';
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
              'hover:bg-accent-interactions-lighter rounded-lg2 hover:border-accent-interactions-light flex items-center gap-2.5 border border-transparent p-[9px_19px]',
              {
                'text-accent-normal': isActive,
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
