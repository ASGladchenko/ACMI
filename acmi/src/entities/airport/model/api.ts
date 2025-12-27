import { apiClient } from '@/shared/api';
import { AirportOptionsResponse } from './types';

type GetAirportsOptionsParams = {
  query: string;
  signal?: AbortSignal;
};

export const getAirportsOptions = async ({ query, signal }: GetAirportsOptionsParams) =>
  await apiClient<AirportOptionsResponse>(`/airports/search?q=${query}`, { signal }).then(
    (res) => res.data.airports
  );
