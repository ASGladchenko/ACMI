import { cn } from '@/utils';
import { ChildrenProps } from '@/shared/types';

export const HeaderWrapper = ({ isMain, children }: ChildrenProps<{ isMain?: boolean }>) => {
  return (
    <header
      className={cn(
        'tablet:py-[15px] desktop:py-5 desktop:px-[70px] w-full px-5 py-2.5',
        isMain && 'laptop:py-5 fixed top-0 left-0'
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        {children}
      </div>
    </header>
  );
};
