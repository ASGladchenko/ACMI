import { create } from 'zustand';

export interface EtopsType {
  id: number;
  etops_rating: string;
}

type EtopsState = {
  etops: EtopsType[];
  setEtops: (etops: EtopsType[]) => void;
  getEtops: () => EtopsType[];
};

export const useETOPSStore = create<EtopsState>((set, get) => ({
  etops: [],
  setEtops: (etops: EtopsType[]) => {
    set({ etops });
  },
  getEtops: () => get().etops,
}));
