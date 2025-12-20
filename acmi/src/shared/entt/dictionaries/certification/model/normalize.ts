import { SelectOption } from '@/shared/types';
import { normalizeDictionaryToOptions } from '@/shared/lib';

import { CertificationDTO } from './types';

export function normalizeCertifications(data: CertificationDTO[]): SelectOption[] {
  return normalizeDictionaryToOptions<CertificationDTO>(data, 'certification');
}
