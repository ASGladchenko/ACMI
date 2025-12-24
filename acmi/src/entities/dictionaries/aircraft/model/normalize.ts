import { SelectOption } from '@/shared/types';
import { normalizeDictionaryToOptions } from '@/shared/lib';

import { AircraftTypeDTO } from './types';

export function normalizeAircraftTypes(data: AircraftTypeDTO[]): SelectOption[] {
  return normalizeDictionaryToOptions<AircraftTypeDTO>(data, 'model');
}
