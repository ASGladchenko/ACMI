import { Role } from '@/shared/types';

export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface NavbarProps {
  isIcon?: boolean;
  className?: string;
  role: Role | undefined;
  type?: 'header' | 'burger';
}
