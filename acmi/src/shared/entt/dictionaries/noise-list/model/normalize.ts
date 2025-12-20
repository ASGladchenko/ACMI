import { SelectOption } from '@/shared/types';
import { normalizeDictionaryToOptions } from '@/shared/lib';

import { NoiseListDTO } from './types';

export function normalizeNoiseList(data: NoiseListDTO[]): SelectOption[] {
  return normalizeDictionaryToOptions<NoiseListDTO>(data, 'noise_stage');
}
