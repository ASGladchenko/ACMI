import { TypeFleet } from '@/types';
import {
  EtopsType,
  NoiseStage,
  ILSCategory,
  useETOPSStore,
  AirCraftTypes,
  useNoiseStageStore,
  useILSCategoryStore,
  useAirCraftTypesStore,
} from '@/store';

export type FleetItem = AirCraftTypes | EtopsType | ILSCategory | NoiseStage;

export const getStoreFleet = (fleet: TypeFleet) => {
  switch (fleet) {
    case 'aircraftTypes':
      return {
        store: useAirCraftTypesStore,
        key: 'aircraftTypes' as const,
      };
    case 'etops':
      return {
        store: useETOPSStore,
        key: 'etops' as const,
      };
    case 'ilsCategory':
      return {
        store: useILSCategoryStore,
        key: 'ilsCategory' as const,
      };
    case 'noiseStage':
      return {
        store: useNoiseStageStore,
        key: 'noiseStage' as const,
      };
    default:
      throw new Error('Invalid fleet type');
  }
};

export const getItemText = (item: FleetItem): string => {
  if ('model' in item) return item.model;
  if ('etops_rating' in item) return item.etops_rating;
  if ('category' in item) return item.category;
  if ('noise_stage' in item) return item.noise_stage;
  return '';
};
