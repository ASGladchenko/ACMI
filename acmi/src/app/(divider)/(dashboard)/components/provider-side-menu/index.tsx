'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Cross } from '@/assets/svg';

import { routes } from './config';
import { getStyles } from './style';

export const ProviderSideMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const { link, title, wrapper, btnOpen, btnClose } = getStyles();

  return (
    <div className={wrapper(isOpen)}>
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
  );
};
