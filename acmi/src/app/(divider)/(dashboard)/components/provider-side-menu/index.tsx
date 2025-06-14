'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Cross } from '@/assets/svg';

import { routes } from './config';
import { getStyles } from './style';
import { RemoveScroll } from 'react-remove-scroll';

export const ProviderSideMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { link, title, wrapper, btnOpen, btnClose } = getStyles();

  return (
    <RemoveScroll enabled={isOpen} className={wrapper(isOpen)}>
      <div className="top-10 left-0 w-full min-[1280px]:sticky">
        <button className={btnClose} onClick={() => setIsOpen(false)}>
          <Cross className="text-gray-dark hover:text-blue-deep h-4 w-4 cursor-pointer duration-200" />
        </button>

        <button className={btnOpen(isOpen)} onClick={() => setIsOpen(true)}>
          Navigation
        </button>

        <h3 className={title}>Provider dashboard</h3>

        <div className="flex flex-col gap-2">
          {Object.entries(routes).map(([key, value]) => (
            <Link href={value} key={key + value} className={link(pathname === value)}>
              {key}
            </Link>
          ))}
        </div>
      </div>
    </RemoveScroll>
  );
};
