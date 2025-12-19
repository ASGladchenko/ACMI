import { Role } from '@/types';
import { Logo } from '@/shared/assets';
import { RoleGuard } from '@/shared/ui';
import { ButtonLogin, ButtonIntegrationLeon } from '@/features';

import { Navbar } from '../navbar';
import { ButtonProfile } from '../button-profile';
import { HeaderWrapper } from '../header-wrapper';
import { ButtonMessage } from '../button-message';
import { cn } from '@/shared/utils';

interface HeaderProps {
  role?: Role;
  isMain?: boolean;
}

export const Header = ({ role, isMain }: HeaderProps) => {
  return (
    <HeaderWrapper isMain={isMain}>
      <Logo
        className={cn(
          'laptop:w-52 laptop:h-5 text-accent-normal h-4 w-[166px] shrink-0',
          isMain && 'text-white'
        )}
      />
      <Navbar role={role} className="laptop:flex hidden" />

      <div className="flex items-center gap-[15px]">
        {!role && <ButtonLogin />}

        <RoleGuard role={role} allow={[Role.USER]}>
          <ButtonIntegrationLeon className="tablet:flex hidden" />
        </RoleGuard>

        <RoleGuard role={role} allow={[Role.USER, Role.PROVIDER]}>
          <ButtonMessage />

          <ButtonProfile isMain={isMain} role={role} />
        </RoleGuard>
      </div>
    </HeaderWrapper>
  );
};
