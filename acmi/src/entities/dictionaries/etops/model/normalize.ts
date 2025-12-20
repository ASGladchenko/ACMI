import { SelectOption } from '@/shared/types';
import { normalizeDictionaryToOptions } from '@/shared/lib';

import { ETOPSDTO } from './types';

export function normalizeETOPS(data: ETOPSDTO[]): SelectOption[] {
  return normalizeDictionaryToOptions<ETOPSDTO>(data, 'etops_rating');
}
