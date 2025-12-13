

import Image from 'next/image';

import { NormalizedDetailedOffer } from '@/types';
import { Button, AvailabilityBadge } from '@/shared/ui';
import { Location, planeDefault } from '@/shared/assets';

interface SuggestionCardProps {
  isVerified?: boolean;
  onClick?: () => void;
  offer: NormalizedDetailedOffer;
}

export const SuggestionCard = ({ isVerified, offer, onClick }: SuggestionCardProps) => {
  const {
    age,
    type,
    mtow,
    layout,
    region,
    engines,
    imageUrl,
  } = offer?.aircraftDetails ?? {};


  const content = [
    { labelTop: 'Engines', valueTop: engines || 'N/A', labelBottom: 'Layout', valueBottom: layout },
    {
      labelTop: 'MTOW',
      valueTop: mtow ? `${mtow} kg` : 'N/A',
      labelBottom: 'Age',
      valueBottom: age ? `${age} yrs` : 'N/A',
    },
  ];

  return (
    <div className="rounded-2xl2 border-iron hover:shadow-lg-blue-dark flex w-full flex-col border p-5 transition-shadow duration-300 ease-in-out">
      <div className="rounded-lg2 relative my-auto mb-5 flex h-[200px] w-full justify-center">
        <Image
          priority
          alt={type || 'Aircraft Image'}
          src={imageUrl || planeDefault}
          className="object-contain max-[480px]:max-w-[280px] max-[380px]:max-w-[220px]"
          onError={(event) => (event.currentTarget.src = planeDefault.src)}
        />
        {isVerified && <AvailabilityBadge />}
      </div>

      <div className="mb-[25px]">
        <h4 className="text-[24px] leading-[1.2] font-bold">{type || 'Unknown Aircraft'}</h4>

        <p className="text-accent-normal mt-2 flex items-center text-[15px] leading-[1.2] font-semibold">
          <Location className="mr-2 h-5 w-5" />
          <span>{region ?? 'Unknown Region'}</span>
        </p>
      </div>

      <div className="mb-[25px] flex w-full flex-wrap gap-5">
        {content.map((item, index) => (
          <div
            key={`card-${index}`}
            className="max- flex w-full max-w-[calc(50%-10px)] flex-col gap-[15px_0] max-[450px]:max-w-full"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-text-secondary text-[15px] leading-[1.2]">{item.labelTop}</span>
              <span className="truncate">{item.valueTop}</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-text-secondary text-[15px] leading-[1.2]">
                {item.labelBottom}
              </span>
              <span className="truncate">{item.valueBottom}</span>
            </div>
          </div>
        ))}
      </div>

      <Button onClick={onClick}>Proceed to RFQ</Button>
    </div>
  );
};
