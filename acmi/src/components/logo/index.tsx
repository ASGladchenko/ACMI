import Link from 'next/link';
import type { LinkProps } from 'next/link';

import { cn } from '@/utils';
import { LogoBlue } from '@/assets/svg';

export interface LogoProps extends Omit<LinkProps, 'href'> {
  href?: string;
  size?: 'm' | 'lg';
}

export const Logo = ({ href = '/', size = 'lg', ...props }: LogoProps) => {
  const cl = cn(
    'text-blue-dark hover:drop-shadow-link flex shrink-0 duration-200',
    size === 'm' && 'w-[100px] mob:w-[155px] ',
    size === 'lg' && 'w-[160px] mob:w-[208px]'
  );

  return (
    <Link href={href} {...props}>
      <LogoBlue className={cl} />
    </Link>
  );
};
