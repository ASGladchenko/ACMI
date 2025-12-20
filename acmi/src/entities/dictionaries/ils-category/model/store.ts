import { create } from 'zustand';

import { LoadingStatus } from '@/shared/types';
import { getErrorMessage } from '@/shared/utils';
import { sortDictionaryItems } from '@/shared/lib';

import { ILSCategoryDTO } from './types';
import { getILSCategory } from '../api/getILSCategory';

type State = {
  items: ILSCategoryDTO[];
  error: string | null;
  status: LoadingStatus;
  ensureLoaded: () => Promise<void>;
};

export const useILSCategoryStore = create<State>((set, get) => ({
  items: [],
  error: null,
  status: 'idle',

  ensureLoaded: async () => {
    const { items, status } = get();
    if (items.length || status === 'loading') return;

    set({ status: 'loading' });

    try {
      const data = await getILSCategory();

      const sorted = sortDictionaryItems<ILSCategoryDTO>(data, (item) => item.category);

      set({ items: sorted, status: 'success' });
    } catch (e) {
      const msg = getErrorMessage(e, 'Failed to load ILS Category list');
      set({ items: [], status: 'error', error: msg });
    }
  },
}));
