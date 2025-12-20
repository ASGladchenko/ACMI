import { SelectOption } from '@/shared/types';
import { normalizeDictionaryToOptions } from '@/shared/lib';

import { ILSCategoryDTO } from './types';

export function normalizeILSCategory(data: ILSCategoryDTO[]): SelectOption[] {
  return normalizeDictionaryToOptions<ILSCategoryDTO>(data, 'category');
}
