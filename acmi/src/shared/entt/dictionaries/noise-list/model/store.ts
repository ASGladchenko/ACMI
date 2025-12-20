import { create } from 'zustand';

import { LoadingStatus } from '@/shared/types';
import { getErrorMessage } from '@/shared/utils';
import { sortDictionaryItems } from '@/shared/lib';

import { NoiseListDTO } from './types';
import { getNoiseList } from '../api/getNoiseList';

type State = {
  items: NoiseListDTO[];
  error: string | null;
  status: LoadingStatus;
  ensureLoaded: () => Promise<void>;
};

export const useNoiseListStore = create<State>((set, get) => ({
  items: [],
  error: null,
  status: 'idle',

  ensureLoaded: async () => {
    const { items, status } = get();
    if (items.length || status === 'loading') return;

    set({ status: 'loading' });

    try {
      const data = await getNoiseList();

      const sorted = sortDictionaryItems<NoiseListDTO>(data, (item) => item.noise_stage);

      set({ items: sorted, status: 'success' });
    } catch (e) {
      const msg = getErrorMessage(e, 'Failed to load Noise list');

      set({ items: [], status: 'error', error: msg });
    }
  },
}));
