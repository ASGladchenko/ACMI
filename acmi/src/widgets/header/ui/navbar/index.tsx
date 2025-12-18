'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { appendClassIcon, cn } from '@/utils';
import { transitionClass } from '@/shared/constants';

import { NavbarProps } from './types';
import { hasNavLinks, navLinks } from '../../model/nav-bar-config';

export const Navbar = ({ role, className, isIcon = true, type = 'header' }: NavbarProps) => {
  const pathname = usePathname();

  if (!role || !hasNavLinks(role, navLinks)) {
    return null;
  }

  const roleLinks = navLinks[role];

  const styleNav = cn(
    {
      header: 'flex max-w-max items-center gap-[5px]',
      burger: 'flex flex-col',
    }[type],
    className
  );

  return (
    <nav className={styleNav}>
      {roleLinks.map((nav, idx, arr) => {
        const isActive = pathname === nav.href;
        const lastEl = arr.length - 1 === idx;

        return (
          <Fragment key={nav.label}>
            <Link
              href={nav.href}
              className={cn(
                {
                  header: cn(
                    'rounded-lg2 flex items-center gap-2.5 border border-transparent p-[9px_19px]',
                    {
                      'text-accent-normal cursor-default': isActive,
                      'hover:bg-accent-interactions-lighter hover:border-accent-interactions-light':
                        !isActive,
                    }
                  ),
                  burger: cn('flex h-10 w-full cursor-pointer items-center px-[15px]', {
                    'text-accent-normal cursor-default font-medium': isActive,
                    'hover:bg-bg-secondary hover:text-accent-normal': !isActive,
                  }),
                }[type],
                transitionClass
              )}
            >
              {isIcon &&
                appendClassIcon(
                  nav.icon as React.ReactElement,
                  cn('w-6 h-6', { 'text-accent-normal': isActive })
                )}

              {nav.label}
            </Link>

            {lastEl && type === 'burger' && (
              <div className="mt-[5px] w-full px-[15px] py-[9px]">
                <span className="block h-px w-full bg-[#E2E5EA]"></span>
              </div>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};
