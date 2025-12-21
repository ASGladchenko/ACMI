'use client';

import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils';

export interface ClientLinkProps extends LinkProps {
  rel?: string;
  target?: string;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const ClientLink = ({
  children,
  isActive,
  className,
  isDisabled,
  ...props
}: ClientLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    props.onClick?.(e);
  };

  return (
    <Link
      {...props}
      onClick={handleClick}
      className={cn(
        'text-blue-dark px-2 py-1 text-center text-base duration-100 ease-in-out disabled:opacity-60',
        isActive && 'scale-105',
        !isDisabled && 'hover:drop-shadow-link cursor-pointer',
        isDisabled && 'cursor-not-allowed opacity-60',
        className
      )}
    >
      {children}
    </Link>
  );
};
