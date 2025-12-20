import { create } from 'zustand';

import { LoadingStatus } from '@/shared/types';
import { getErrorMessage } from '@/shared/utils';
import { sortDictionaryItems } from '@/shared/lib';

import { AircraftTypeDTO } from './types';
import { getAircraftTypes } from '../api/getAircraftTypes';

type State = {
  items: AircraftTypeDTO[];
  error: string | null;
  status: LoadingStatus;
  ensureLoaded: () => Promise<void>;
};

export const useAircraftTypesStore = create<State>((set, get) => ({
  items: [],
  error: null,
  status: 'idle',

  ensureLoaded: async () => {
    const { items, status } = get();
    if (items.length || status === 'loading') return;

    set({ status: 'loading' });

    try {
      const data = await getAircraftTypes();
      const sorted = sortDictionaryItems<AircraftTypeDTO>(data, (item) => item.model);

      set({ items: sorted, status: 'success' });
    } catch (e) {
      const msg = getErrorMessage(e, 'Failed to load aircraft types');

      set({ items: [], status: 'error', error: msg });
    }
  },
}));
