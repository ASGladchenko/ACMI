export const navLinks = [
  { id: '1', href: '/v2', label: 'My Account' },
  { id: '2', href: '/v2/ui', label: 'Company' },
  { id: '3', href: '/v2/ui/card', label: 'Integrations' },
  { id: '4', href: '/v2/ui/card', label: 'Settings' },
];

export type NavLinksType = (typeof navLinks)[number];
