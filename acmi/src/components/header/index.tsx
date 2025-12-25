'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Role } from '@/types';
import { useUserStore } from '@/store';
import { useUrlWithParams } from '@/hooks';
import { Logo, Button, ClientLink } from '@/components';

import { BurgerMenu } from './burger-menu';

export const Header = ({ role }: { role?: Role }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const storeRole = useUserStore((s) => s.user.role);

  const actualRole = storeRole || role;

  const isVisibleCD = actualRole === Role.PROVIDER || actualRole === Role.USER;

  const isProvider = actualRole === Role.PROVIDER;

  const isClient = actualRole === Role.USER;

  const becomeProvider = () => {
    router.push('/integration');
  };

  return (
    <>
      <header className="bg-white shadow-md duration-300">
        <div className="laptop:px-[35px] mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between px-4 py-2">
          <Logo onClick={() => setIsOpen(false)} href={useUrlWithParams({ url: '/' })} />

          <nav className="laptop:flex hidden items-center gap-10">
            <ClientLink href={useUrlWithParams({ url: '/' })}>Home</ClientLink>

            <ClientLink isDisabled={!isProvider} href="/dashboard-provider">
              Provider Dashboard
            </ClientLink>

            <ClientLink isDisabled={!isVisibleCD} href="/dashboard-customer">
              Customer Dashboard
            </ClientLink>

            {isClient && (
              <Button onClick={becomeProvider} className="w-[182px]" buttonType="outline">
                Become a Provider
              </Button>
            )}
          </nav>

          <BurgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isNotCustomer={isVisibleCD}
            isProvider={role === Role.PROVIDER}
          />
        </div>
      </header>
    </>
  );
};
