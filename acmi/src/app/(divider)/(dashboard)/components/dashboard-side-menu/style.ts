import { cn } from '@/utils';

const text = 'font-montserrat text-[25px] font-bold';
const btnClass =
  'font-montserrat text-md text-gray-dark hover:text-blue-deep duration-200 cursor-pointer font-bold';

export const getStyles = () => ({
  wrapper: (isOpen: boolean) =>
    cn(
      'fixed w-full min-[1280px]:max-w-[360px] min-h-dvh pt-10 pl-7 min-[1280px]:relative left-0 transition-all duration-300 max-[1280px]:-translate-x-full min-[1280px]:min-h-[unset] bg-white-dark min-[1280px]:bg-transparent top-0 z-[990]',
      isOpen && 'max-[1280px]:translate-x-0 '
    ),
  title: cn('mb-10 text-center min-[1280px]:text-left text-blue-deep', text),
  btnOpen: (isOpen: boolean) =>
    cn(
      'min-[1280px]:hidden absolute duration-200 right-0 top-16 translate-x-full bg-white-dark p-2',
      btnClass,
      isOpen && 'hidden'
    ),
  btnClose: 'min-[1280px]:hidden absolute duration-200 right-4 top-4',
  link: (isActive: boolean) =>
    cn(
      'text-gray-dark hover:text-blue-deep pl-2 duration-200 capitalize w-full text-center min-[1280px]:text-left min-[1280px]:w-[unset]',
      text,
      isActive && 'text-blue-deep'
    ),
});
