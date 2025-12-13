'use client';

import { SuggestionCard } from '@/shared/ui';

import { mockOffers } from './mock';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 max-[768px]:grid-cols-1">
      {mockOffers.map((offer) => (
        <SuggestionCard key={offer.id} offer={offer} isVerified={offer.providerDetails.iosa} />
      ))}
    </div>
  );
}
