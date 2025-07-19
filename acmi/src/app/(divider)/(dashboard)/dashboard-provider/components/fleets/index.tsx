'use client';

import {
  useETOPSDictionary,
  useNoiseStageDictionary,
  useILSCategoryDictionary,
  useAircraftTypesDictionary,
  useCertificationDictionary,
} from '@/hooks';

import { FleetCard } from './fleet-card';
import { NormalizedAircraftFleet } from '../../types';

export interface FleetWrapperProps {
  error?: string;
  data?: NormalizedAircraftFleet[];
}

export const Fleets = ({ error, data }: FleetWrapperProps) => {
  const isEmpty = !data || data.length === 0;

  useETOPSDictionary();
  useNoiseStageDictionary();
  useILSCategoryDictionary();
  useAircraftTypesDictionary();
  useCertificationDictionary();

  return (
    <>
      <div className="flex flex-col gap-3 px-2 pb-4">
        {error && <h2 className="text-center text-3xl text-red-400">{error}</h2>}

        {!error && isEmpty && (
          <h2 className="text-blue-dark text-center text-3xl">You don`t have an available fleet</h2>
        )}

        {!isEmpty &&
          data.map((aircraft, index) => (
            <FleetCard id={aircraft.id} initialState={aircraft} key={`fleet-${index}`} />
          ))}
      </div>
    </>
  );
};
