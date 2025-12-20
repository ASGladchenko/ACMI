import { SelectOption } from '@/shared/types';

export const normalizeDictionaryToOptions = <T extends { id: string | number }>(
  data: T[],
  key: keyof T
): SelectOption[] => {
  return data.map((item) => ({
    id: item.id?.toString(),
    label: item[key]?.toString() ?? '',
  }));
};
