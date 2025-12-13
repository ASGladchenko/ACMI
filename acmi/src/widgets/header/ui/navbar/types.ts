import { Role } from '@/shared/types';

export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface NavbarProps {
  role: Role;
  className?: string;
}
