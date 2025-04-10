import { cn } from '@/utils';

export const getStyles = (isOpen: boolean) => {
  return {
    container: cn(
      'bg-white-dark shadow-sm-black w-full tablet:w-[600px] flex-col gap-1.5 px-2.5 py-4.5 -translate-x-full h-full duration-300 ease-linear',
      isOpen && 'translate-x-0 '
    ),
    button: cn(
      'border-blue-dark text-blue-dark fixed top-5 left-3 desktop:left-[calc(100dvw/2-670px)] z-[10] translate-y-full cursor-pointer rounded-xl border bg-white p-2 shadow-xl desktop:p-5 hover:[&>svg]:drop-shadow-glow',
      isOpen && 'opacity-0'
    ),
    wrapper: cn(
      'fixed z-[1100] top-0 left-0 h-dvh w-dvw -translate-x-full  ',
      isOpen && 'translate-x-0'
    ),
    overlay: cn('transition-opacity absolute inset-0 bg-black/50 cursor-pointer'),
    itemContainer:
      'bg-white-dark scroll-bar-mini overflow-y-auto max-h-[calc(100%-60px)] flex w-full flex-wrap justify-between items-start gap-1.5',
    item: 'w-full min-[570px]:basis-[calc(50%-4px)]',
  };
};
