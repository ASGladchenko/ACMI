import { useETOPSRaiting } from '../etops';
import { useNoiseList } from '../noise-list';
import { useAircraftTypes } from '../aircraft';
import { useILSCategoryList } from '../ils-category';
import { useCertificationList } from '../certification';

export const DICTIONARY_HOOKS = {
  etops: useETOPSRaiting,
  noise: useNoiseList,
  aircraft: useAircraftTypes,
  ils: useILSCategoryList,
  certifications: useCertificationList,
} as const;

export type DictionaryKey = keyof typeof DICTIONARY_HOOKS;

export function useDictionary<K extends DictionaryKey>(key: K) {
  const hook = DICTIONARY_HOOKS[key];
  return hook();
}
