import { cn } from '@/utils';

export interface getStyles {
  className?: string;
  type: 'standard' | 'portal';
}

export const getStyles = ({ className, type }: getStyles) => ({
  standard: cn(
    'bg-white-dark hidden min-[1240px]:flex hidden w-[325px] flex-col gap-1.5 px-2.5 py-4.5 min-[1240px]:sticky min-[1240px]:top-[76px]',
    className
  ),
  portal: cn(
    'bg-white-dark tablet:w-[700px] tablet:p-6 flex w-[calc(100dvw-40px)] flex-wrap gap-2 rounded-2xl px-3 py-4',
    className
  ),
  checkboxesHalf: cn(type === 'portal' && 'max-w-[calc(50%-4px)]'),
  checkBoxFull: cn(type === 'portal' && 'max-w-full min-[600px]:max-w-[calc(50%-4px)]'),
});
