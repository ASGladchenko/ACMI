import { cn } from '@/shared/utils';
import { ChildrenProps } from '@/shared/types';

export const HeaderWrapper = ({
  isMain,
  children,
  className,
}: ChildrenProps<{ isMain?: boolean; className?: string }>) => {
  return (
    <header
      className={cn(
        'tablet:h-[74px] desktop:h-[84px] flex h-16 w-full items-center',
        isMain && 'laptop:h-[84px] absolute top-0 left-0',
        className
      )}
    >
      <div className="container flex items-center justify-between">{children}</div>
    </header>
  );
};
