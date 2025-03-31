import { Button, ClientLink, Logo } from '@/components';

export const Header = ({}) => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[35px] py-2">
        <Logo />

        <nav className="flex items-center gap-10">
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
      </div>
    </header>
  );
};
