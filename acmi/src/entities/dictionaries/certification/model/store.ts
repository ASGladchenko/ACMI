import { create } from 'zustand';

import { LoadingStatus } from '@/shared/types';
import { getErrorMessage } from '@/shared/utils';
import { sortDictionaryItems } from '@/shared/lib';

import { CertificationDTO } from './types';
import { getCertificationList } from '../api/getCertificationsList';

type State = {
  items: CertificationDTO[];
  error: string | null;
  status: LoadingStatus;
  ensureLoaded: () => Promise<void>;
};

export const useCertificationStore = create<State>((set, get) => ({
  items: [],
  error: null,
  status: 'idle',

  ensureLoaded: async () => {
    const { items, status } = get();
    if (items.length || status === 'loading') return;

    set({ status: 'loading' });

    try {
      const data = await getCertificationList();

      const sorted = sortDictionaryItems<CertificationDTO>(data, (item) => item.certification);

      set({ items: sorted, status: 'success' });
    } catch (e) {
      const msg = getErrorMessage(e, 'Failed to load Certification list');

      set({ items: [], status: 'error', error: msg });
    }
  },
}));
