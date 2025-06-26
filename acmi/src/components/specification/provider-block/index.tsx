import { NormalizedOfferDataProviderDetails } from '@/types';

import { OfferItem, OfferTitle } from '../components';

export interface ProviderBlockProps extends NormalizedOfferDataProviderDetails {
  withProviderContacts?: boolean;
}

export const ProviderBlock = ({
  name,
  iosa,
  registration,
  certifications,
  withProviderContacts,
}: ProviderBlockProps) => {
  return (
    <div className="flex flex-col gap-4 min-[968px]:gap-2">
      <OfferTitle title="Provider details:" />

      {withProviderContacts && (
        <div className="grid grid-cols-1 gap-[0_20px] min-[968px]:grid-cols-2 min-[1320px]:grid-cols-3 min-[1320px]:gap-[10px_40px]">
          <OfferItem text="Name:" value={name || 'N/A'} />
          <OfferItem text="Registration:" value={registration || 'N/A'} />
        </div>
      )}
      <div className="flex flex-col">
        <OfferItem
          className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          text="Certifications:"
          value={certifications}
        />
        <OfferItem
          className="flex-col justify-start min-[968px]:flex-row [&>span:first-child]:min-w-[220px]"
          text="IOSA:"
          value={iosa ? 'Yes' : 'No'}
        />
      </div>
    </div>
  );
};
