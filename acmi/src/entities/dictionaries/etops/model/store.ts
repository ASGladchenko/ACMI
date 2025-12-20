import { create } from 'zustand';

import { LoadingStatus } from '@/shared/types';
import { getErrorMessage } from '@/shared/utils';
import { sortDictionaryItems } from '@/shared/lib';

import { ETOPSDTO } from './types';
import { getETOPSRatings } from '../api/getETOPSRaitings';

type State = {
  items: ETOPSDTO[];
  error: string | null;
  status: LoadingStatus;
  ensureLoaded: () => Promise<void>;
};

export const useETOPSStore = create<State>((set, get) => ({
  items: [],
  error: null,
  status: 'idle',

  ensureLoaded: async () => {
    const { items, status } = get();
    if (items.length || status === 'loading') return;

    set({ status: 'loading' });

    try {
      const data = await getETOPSRatings();

      const sorted = sortDictionaryItems<ETOPSDTO>(data, (item) => item.etops_rating);

      set({ items: sorted, status: 'success' });
    } catch (e) {
      const msg = getErrorMessage(e, 'Failed to load ETOPS ratings');

      set({ items: [], status: 'error', error: msg });
    }
  },
}));
