import { Role } from '@/types';
import { Plane, Sales, Requests } from '@/shared/assets';

export const navLinks = {
  [Role.PROVIDER]: [
    { href: '/v2', label: 'My Fleet', icon: <Plane /> },
    { href: '/v2/ui', label: 'ACMI Sales', icon: <Sales /> },
    { href: '/v2/ui/card', label: 'ACMI Request', icon: <Requests /> },
  ],
  [Role.USER]: [{ href: '/v2/ui/card', label: 'ACMI Request', icon: <Requests /> }],
};

export type NavLinksTypes = typeof navLinks;

export function hasNavLinks(role: Role, links: NavLinksTypes): role is keyof NavLinksTypes {
  return role in links;
}
