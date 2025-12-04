import { cn } from '@/utils';
import { transitionClass } from '@/shared/constants';

import { NavItem, NestedNav } from './types';

export const isNestedNav = (item: NavItem): item is NestedNav => 'nested' in item;

export const duration = 300;

export const getLinkStyles = (isActive: boolean) =>
  cn(
    'cursor-pointer border-2 border-white rounded-lg2 py-2 px-[18px] z-[3] hover:bg-iron-gray  text-text-secondary',
    { 'text-accent-normal font-medium': isActive },
    { 'hover:text-text-primary': !isActive },
    transitionClass
  );
