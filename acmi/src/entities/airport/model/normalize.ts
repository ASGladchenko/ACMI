import { SelectOption } from '@/shared/types';

import { AirportDTO } from './types';

export const normalizeAirport = (airports: AirportDTO[]): SelectOption[] => {
  return airports.map((airport) => ({
    id: airport.code,
    label: `${airport.code}, ${airport.name}`,
  }));
};
