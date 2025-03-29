import { cn } from '@/utils';

const btnClass = 'p-[6px_4px] cursor-pointer rounded-lg leading-4 border-[1px] border-black bg-white text-blue-dark w-full text-[14px]';
const btnActiveClass = 'bg-blue-dark border-blue-dark text-white';

export const getStyles= (isWide: boolean)=> ({
    narrow: cn(btnClass,!isWide && btnActiveClass),
    wide: cn(btnClass,isWide && btnActiveClass)
});
