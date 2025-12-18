import { ChildrenProps, Role } from '@/shared/types';

type BaseProps = {
  role?: Role;
  fallback?: React.ReactNode;
};

type AllowProps = {
  allow: Role[];
  deny?: never;
};

type DenyProps = {
  deny: Role[];
  allow?: never;
};

export type RoleGuardProps = BaseProps & (AllowProps | DenyProps);

export const RoleGuard = ({
  role,
  deny,
  allow,
  children,
  fallback = null,
}: ChildrenProps<RoleGuardProps>) => {
  if (!role) {
    return fallback;
  }

  if (allow && !allow.includes(role)) {
    return fallback;
  }

  if (deny && deny.includes(role)) {
    return fallback;
  }

  return children;
};
