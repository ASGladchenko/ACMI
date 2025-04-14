'use client';

import { useUrlWithParams } from '@/hooks';

import { Logo } from '../logo';
import { ClientLink } from '../links';

export const Footer = ({}) => {
  return (
    <footer className="bg-white-dark">
      <div className="laptop:px-[35px] mx-auto flex w-full max-w-[1310px] flex-col items-center px-5 py-9">
        <div className="border-b-gray-medium flex w-full items-center justify-between border-b pb-9">
          <nav className="laptop:flex-row laptop:gap-10 flex max-w-[50%-10px] flex-col items-start">
            <ClientLink
              className="text-sm min-[420px]:text-base"
              href={useUrlWithParams({ url: '/' })}
            >
              Home
            </ClientLink>

            <ClientLink className="text-sm min-[420px]:text-base" isDisabled href="/">
              Provider Dashboard
            </ClientLink>

            <ClientLink className="text-sm min-[420px]:text-base" isDisabled href="/">
              Customer Dashboard
            </ClientLink>
          </nav>

          <nav className="laptop:flex-row laptop:gap-10 flex max-w-[50%-10px] flex-col items-end">
            <ClientLink className="text-sm min-[420px]:text-base" isDisabled href="/">
              Terms of service
            </ClientLink>

            <ClientLink className="text-sm min-[420px]:text-base" isDisabled href="/">
              Contacts
            </ClientLink>

            <ClientLink className="text-sm min-[420px]:text-base" isDisabled href="/">
              Privacy policy
            </ClientLink>
          </nav>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-3 pt-9 min-[420px]:flex-row min-[420px]:gap-1">
          <Logo size="m" href={useUrlWithParams({ url: '/' })} />

          <p className="text-gray-dark font-medium">
            &copy; {new Date().getFullYear()} ACMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
