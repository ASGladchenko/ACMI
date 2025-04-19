import { cn } from '@/utils';

export type HeroType = 'standard' | 'portal';

export const getStyles = (type: HeroType, className?: string) => {
  return {
    standard: {
      cl: cn(
        'bg-white-dark shadow-sm-black flex items-start flex-wrap min-[1360px]:flex-nowrap items-start justify-end gap-2.5 rounded-xl px-2.5 py-4',
        className
      ),
      body: 'tablet:-order-2 tablet:max-w-max desktop:order-1 w-full',
      bodyBtn: 'max-w-full tablet:max-w-max',
      select: 'laptop:basis-[330px] tablet:-order-0 desktop:order-2 grow-1 desktop:max-w-[350px]',
      input: 'laptop:max-w-[180px] tablet:max-w-[calc(100%-206px)] tablet:-order-1 desktop:order-3',
      date: 'laptop:basis-[380px] tablet:max-w-[calc(100%-190px)] desktop:order-4 grow-1',
      button: 'tablet:max-w-[180px] desktop:order-5',
    },
    portal: {
      cl: cn(
        'bg-white-dark tablet:w-[600px] flex w-[calc(100dvw-40px)] flex-col gap-3 rounded-2xl px-3 py-4',
        className
      ),
      body: 'w-full',
      bodyBtn: 'max-w-full',
      select: '',
      input: '',
      date: '',
      button: '',
    },
  }[type];
};
