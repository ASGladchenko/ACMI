export interface NavLink {
  href: string;
  label: string;
}
export interface NestedNav {
  label: string;
  nested: NavLink[];
}

export type NavItem = NavLink | NestedNav;

export interface NavbarLinksProps {
  links: NavItem[];
}
