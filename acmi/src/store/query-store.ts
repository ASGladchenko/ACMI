import { create } from 'zustand';

type QueryState = {
  queries: Record<string, string>;
  setQuery: (key: string, value: string | null) => void;
  getQuery: (key: string) => string | undefined;
};

export const useQueryStore = create<QueryState>((set, get) => ({
  queries: {},
  setQuery: (key, value) => {
    const current = { ...get().queries };
    if (value === null) {
      delete current[key];
    } else {
      current[key] = value;
    }
    set({ queries: current });
  },
  getQuery: (key) => get().queries[key],
}));
