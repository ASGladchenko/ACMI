'use client';

import {
  useETOPSDictionary,
  useNoiseStageDictionary,
  useILSCategoryDictionary,
  useAircraftTypesDictionary,
} from '@/hooks';

import { TitleDB } from '../components';
import { FleetCard } from './components';

export default function ProviderPage() {
  const { isLoading: isLoadingETOPS } = useETOPSDictionary();
  const { isLoading: isLoadingILS } = useILSCategoryDictionary();
  const { isLoading: isLoadingNoise } = useNoiseStageDictionary();
  const { isLoading: isLoadingAirType } = useAircraftTypesDictionary();

  return (
    <section>
      <TitleDB title="Fleet" />

      <div className="flex flex-col gap-3 px-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <FleetCard
            key={index}
            id={index.toString()}
            isLoading={isLoadingAirType || isLoadingETOPS || isLoadingILS || isLoadingNoise}
          />
        ))}
      </div>
    </section>
  );
}
