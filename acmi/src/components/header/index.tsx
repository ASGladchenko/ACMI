'use client';
import { useState } from 'react';

import { Button, ClientLink, Logo } from '@/components';

import { BurgerMenu } from './burger-menu';

export const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 z-[999] bg-white shadow-md">
        <div className="laptop:px-[35px] mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between px-4 py-2">
          <Logo onClick={() => setIsOpen(!isOpen)} />

          <nav className="laptop:flex hidden items-center gap-10">
            <ClientLink href="/">Home</ClientLink>

            <ClientLink isDisabled href="/">
              Provider Dashboard
            </ClientLink>

            <ClientLink isDisabled href="/">
              Customer Dashboard
            </ClientLink>

            <Button className="w-[182px]" buttonType="outline">
              Login/ Registration
            </Button>
          </nav>

          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  );
};
