import { homePlane } from '@/shared/assets';
import Image from 'next/image';

export const HomePage = ({}) => {
  return (
    <>
      <Image src={homePlane} alt="plane" className="h-[770px] w-full" />
      <div className="container"></div>
    </>
  );
};
