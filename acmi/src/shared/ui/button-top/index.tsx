import { ArrowLong } from '@/shared/icons';

import { ButtonTopProps } from './types';

export const ButtonTop = (props: ButtonTopProps) => {
  return (
    <button
      {...props}
      className="bg-accent-normal hover:bg-accent-interactions-dark active:bg-accent-interactions-darker shadow-lg-blue-dark flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition duration-300 ease-in-out"
    >
      <ArrowLong className="h-6 w-6 text-white" />
    </button>
  );
};
