'use client';

import {
  useETOPSDictionary,
  useNoiseStageDictionary,
  useILSCategoryDictionary,
  useAircraftTypesDictionary,
} from '@/hooks';

import { FleetCard } from './components';

export default function ProviderPage() {
  const { isLoading: isLoadingETOPS } = useETOPSDictionary();
  const { isLoading: isLoadingILS } = useILSCategoryDictionary();
  const { isLoading: isLoadingNoise } = useNoiseStageDictionary();
  const { isLoading: isLoadingAirType } = useAircraftTypesDictionary();

  const onSave = () => {
    console.log('save');
  };

  const onDecline = () => {
    console.log('decline');
  };

  return (
    <section>
      <h1 className="font-montserrat text-blue-deep mb-9 text-center text-[25px] font-bold max-[768px]:text-[20px] max-[768px]:leading-[24px]">
        Fleet
      </h1>

      <div className="flex flex-col gap-3 px-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <FleetCard
            key={index}
            onSave={onSave}
            id={index.toString()}
            onDecline={onDecline}
            isLoading={isLoadingAirType || isLoadingETOPS || isLoadingILS || isLoadingNoise}
          />
        ))}
      </div>
    </section>
  );
}
