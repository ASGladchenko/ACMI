import { cloneElement, isValidElement } from 'react';
import { cn } from './cn';

export const appendClassIcon = (
  icon: React.ReactElement | null | undefined,
  extraClasses: string
) => {
  if (!icon || !isValidElement(icon)) return null;

  const element = icon as React.ReactElement<{ className?: string }>;

  return cloneElement(element, {
    className: cn(element.props.className, extraClasses),
  });
};
