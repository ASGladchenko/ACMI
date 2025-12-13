import { Role } from '@/types';
import { Logo } from '@/shared/assets';
import { BecomeProvider, ButtonLogin } from '@/features';

import { Navbar } from '../navbar';
import { HeaderWrapper } from '../header-wrapper';

interface HeaderProps {
  role?: Role;
  isMain?: boolean;
}

export const Header = ({ role = Role.PROVIDER, isMain }: HeaderProps) => {
  console.log({ role, isMain });

  return (
    <HeaderWrapper isMain={isMain}>
      <Logo className="laptop:w-52 laptop:h-5 text-accent-normal h-4 w-[166px] shrink-0" />
      <Navbar role={role} />
      {!role && <ButtonLogin />}

      <div>
        <BecomeProvider />
      </div>
    </HeaderWrapper>
  );
};
