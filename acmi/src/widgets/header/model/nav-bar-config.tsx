import { Role } from '@/types';
import { Plane, Sales, Requests } from '@/shared/assets';

export const navLinks = {
  [Role.PROVIDER]: [
    { href: '/', label: 'My Fleet', icon: <Plane /> },
    { href: '/ui', label: 'ACMI Sales', icon: <Sales /> },
    { href: '/ui', label: 'ACMI Request', icon: <Requests /> },
  ],
  [Role.USER]: [{ href: '/ui', label: 'ACMI Request', icon: <Requests /> }],
};

export type NavLinksTypes = typeof navLinks;

export function hasNavLinks(role: Role, links: NavLinksTypes): role is keyof NavLinksTypes {
  return role in links;
}
