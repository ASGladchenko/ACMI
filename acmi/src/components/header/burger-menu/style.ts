import { cn } from '@/utils';

export const getStyles = (isOpen: boolean) => {
  return {
    menu: cn(
      'laptop:hidden bg-white-dark duration-300 translate-x-full tablet:top-[48px] tablet:h-[calc(100dvh-48px)] fixed top-[40px] right-0 z-[999] flex h-[calc(100dvh-40px)] w-full flex-col items-center gap-4 py-8',
      isOpen && 'translate-x-0'
    ),
  };
};
