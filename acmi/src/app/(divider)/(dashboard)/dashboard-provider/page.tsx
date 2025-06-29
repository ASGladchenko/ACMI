'use client';

import { showMessage } from '@/components';
import {
  useETOPSDictionary,
  useNoiseStageDictionary,
  useILSCategoryDictionary,
  useAircraftTypesDictionary,
} from '@/hooks';

import { TitleDB } from '../components';
import { FleetCard } from './components';
import { useProviderFleet } from './useProviderFleet';

export default function ProviderPage() {
  const { isLoading: isLoadingETOPS } = useETOPSDictionary();
  const { isLoading: isLoadingILS } = useILSCategoryDictionary();
  const { isLoading: isLoadingNoise } = useNoiseStageDictionary();
  const { isLoading: isLoadingAirType } = useAircraftTypesDictionary();

  const onError = (msg: string) => {
    showMessage.error(msg);
  };
  const { data, error, isSuccess } = useProviderFleet({ onError });

  return (
    <section>
      <TitleDB title="Fleet" />

      <div className="flex flex-col gap-3 px-2 pb-4">
        {error && <h2 className="text-center text-3xl text-red-400">{error}</h2>}

        {isSuccess &&
          data &&
          Array.from({ length: 10 }).map((_, index) => (
            <FleetCard
              key={`fleet-${index}`}
              id={index.toString()}
              isLoading={isLoadingAirType || isLoadingETOPS || isLoadingILS || isLoadingNoise}
            />
          ))}
      </div>
    </section>
  );
}
