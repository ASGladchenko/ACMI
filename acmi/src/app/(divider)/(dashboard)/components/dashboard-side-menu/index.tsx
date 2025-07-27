'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RemoveScroll } from 'react-remove-scroll';

import { Cross } from '@/assets/svg';

import { getStyles } from './style';
import { routes, titles } from '../../config';

export const DashBoardSideMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const type = pathname.split('/')[1];

  const { link, title: titleStyle, wrapper, btnOpen, btnClose } = getStyles();

  return (
    <RemoveScroll enabled={isOpen} className={wrapper(isOpen)}>
      <div className="top-10 left-0 w-full min-[1280px]:sticky">
        <button className={btnClose} onClick={() => setIsOpen(false)}>
          <Cross className="text-gray-dark hover:text-blue-deep h-4 w-4 cursor-pointer duration-200" />
        </button>

        <button className={btnOpen(isOpen)} onClick={() => setIsOpen(true)}>
          Navigation
        </button>

        <h3 className={titleStyle}>{titles[type as keyof typeof titles]}</h3>

        <div className="flex flex-col gap-2">
          {Object.entries(routes[type as keyof typeof routes]).map(([key, value], idx) => {
            const isActive = idx === 0 ? pathname === value : pathname.includes(value);

            return (
              <Link
                href={value}
                key={key + value}
                className={link(isActive)}
                onClick={() => setIsOpen(false)}
              >
                {key.split('_').join(' ')}
              </Link>
            );
          })}
        </div>
      </div>
    </RemoveScroll>
  );
};
