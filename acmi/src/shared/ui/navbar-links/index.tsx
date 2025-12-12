'use client';

import { useRef, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { ArrowDown } from '@/assets/svg';
import { useSelect } from '@/shared/hooks';
import { transitionClass } from '@/shared/constants';

import { DropdownList } from '../dropdown-list';
import { NavLink, NavbarLinksProps } from './types';
import { duration, isNestedNav, getLinkStyles } from './helper';

export const NavbarLinks = ({ links }: NavbarLinksProps) => {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const { isOpen, animation, onToggleSelect } = useSelect({
    refs: [wrapperRef, elementRef],
    delayUnmount: duration,
    outSideClick: () => {
      onToggleSelect(false);
    },
  });

  const handleOpen = () => {
    onToggleSelect(!isOpen);
  };

  return (
    <nav className="rounded-lg2 relative z-100 flex max-w-max items-center gap-[5px] bg-white">
      <div className="rounded-lg2 shadow-lg-blue-dark absolute z-[2] h-full w-full" />

      {links.map((nav) => {
        if (isNestedNav(nav)) {
          const isActive = nav.nested.some((child) => child.href === pathname);

          return (
            <Fragment key={nav.label}>
              <button
                ref={wrapperRef}
                onClick={handleOpen}
                className={cn('flex items-center', getLinkStyles(isActive))}
              >
                {nav.label}
                <ArrowDown
                  className={cn(
                    'text-text-secondary ml-2.5 h-4 w-4 shrink-0',
                    transitionClass,
                    isOpen && 'rotate-180'
                  )}
                />
              </button>

              <DropdownList<NavLink>
                height={180}
                ref={elementRef}
                data={nav.nested}
                animation={animation}
                animationDuration={duration}
                className="right-0 z-[1] mt-1 w-[180px] [&>div]:overflow-hidden"
                RenderItem={({ item }) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    className={cn('text-text-secondary flex w-full px-[15px] py-2', {
                      'text-accent-normal font-medium': pathname === item.href,
                      'hover:bg-iron-gray hover:text-text-primary': pathname !== item.href,
                    })}
                  >
                    {item.label}
                  </Link>
                )}
              />
            </Fragment>
          );
        }

        const isActive = pathname === nav.href;

        return (
          <Link href={nav.href} key={nav.label} className={getLinkStyles(isActive)}>
            {nav.label}
          </Link>
        );
      })}
    </nav>
  );
};
