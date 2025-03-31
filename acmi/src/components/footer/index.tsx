import { Logo } from '../logo';
import { ClientLink } from '../links';

export const Footer = ({}) => {
  return (
    <footer className="bg-white-dark">
      <div className="mx-auto flex w-full max-w-[1310px] flex-col items-center px-[35px] py-9">
        <div className="border-b-gray-medium flex w-full items-center justify-between border-b pb-9">
          <nav className="flex items-center gap-10">
            <ClientLink href="/">Home</ClientLink>

            <ClientLink isDisabled href="/">
              Provider Dashboard
            </ClientLink>

            <ClientLink isDisabled href="/">
              Customer Dashboard
            </ClientLink>
          </nav>

          <nav className="flex items-center gap-10">
            <ClientLink isDisabled href="/">
              Terms of service
            </ClientLink>

            <ClientLink isDisabled href="/">
              Contacts
            </ClientLink>

            <ClientLink isDisabled href="/">
              Privacy policy
            </ClientLink>
          </nav>
        </div>

        <div className="flex w-full items-center justify-between pt-9">
          <Logo size="m" />

          <p className="text-gray-dark font-medium">
            &copy; {new Date().getFullYear()} ACMI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
