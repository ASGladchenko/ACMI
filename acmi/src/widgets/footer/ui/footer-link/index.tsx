'use client';

import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils';

export interface FooterLinkProps extends LinkProps {
  className?: string;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const FooterLink = ({ children, className, isDisabled, ...props }: FooterLinkProps) => {
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
        'laptop:text-[15px] inline-block cursor-pointer text-center text-xs leading-[1.2] text-white duration-200 ease-in-out',
        !isDisabled && 'cursor-pointer hover:scale-105',
        isDisabled && 'cursor-not-allowed opacity-40',
        className
      )}
    >
      {children}
    </Link>
  );
};
