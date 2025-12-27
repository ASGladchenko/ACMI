import { HTMLAttributes } from 'react';

import { Plane, Airport } from '@/shared/assets';

import { SwitchedItemType } from '../dropdown-items';

type SVGProps = HTMLAttributes<SVGElement>;

type IconProps = SVGProps & {
  itemType: SwitchedItemType;
};

export const Icon = ({ itemType, ...props }: IconProps) => {
  if (itemType === 'plane') {
    return <Plane {...props} />;
  }
  if (itemType === 'airport') {
    return <Airport {...props} />;
  }
  return null;
};
