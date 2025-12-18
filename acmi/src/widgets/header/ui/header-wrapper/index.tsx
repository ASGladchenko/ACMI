import { cn } from '@/utils';
import { ChildrenProps } from '@/shared/types';

export const HeaderWrapper = ({ isMain, children }: ChildrenProps<{ isMain?: boolean }>) => {
  return (
    <header
      className={cn(
        'tablet:h-[74px] desktop:h-[84px] desktop:px-[70px] flex h-16 w-full items-center px-5',
        isMain && 'laptop:h-[84px] fixed top-0 left-0'
      )}
    >
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between">
        {children}
      </div>
    </header>
  );
};
