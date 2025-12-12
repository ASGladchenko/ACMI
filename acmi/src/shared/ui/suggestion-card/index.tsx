import { planeDefault } from '@/shared/assets';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

export const SuggestionCard = ({}) => {
  const [src, setSrc] = useState<string | StaticImageData>('');

  return (
    <div className="rounded-2xl2 border-iron border">
      <div>
        <Image
          fill
          src={''}
          alt={''}
          sizes="100%"
          className="object-contain p-2"
          onError={() => setSrc(planeDefault)}
        />
      </div>
    </div>
  );
};
