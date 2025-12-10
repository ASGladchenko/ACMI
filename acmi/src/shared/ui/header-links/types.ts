export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface HeaderLinksProps {
  links: NavLink[];
  className?: string;
}
