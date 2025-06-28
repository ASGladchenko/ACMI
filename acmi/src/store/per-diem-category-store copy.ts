import { create } from 'zustand';

export interface PerDiem {
  id: number;
  per_diem: string;
}

type PerDiemState = {
  per_diem: PerDiem[];
  setPerDiem: (PerDiem: PerDiem[]) => void;
  getPerDiem: () => PerDiem[];
};

export const usePerDiemStore = create<PerDiemState>((set, get) => ({
  per_diem: [],
  setPerDiem: (per_diem: PerDiem[]) => {
    set({ per_diem });
  },
  getPerDiem: () => get().per_diem,
}));
