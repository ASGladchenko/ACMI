import { create } from 'zustand';

export interface Positioning {
  id: number;
  positioning: string;
}

type PositioningState = {
  positioning: Positioning[];
  setPositioning: (positioning: Positioning[]) => void;
  getPositioning: () => Positioning[];
};

export const usePositioningStore = create<PositioningState>((set, get) => ({
  positioning: [],
  setPositioning: (positioning: Positioning[]) => {
    set({ positioning });
  },
  getPositioning: () => get().positioning,
}));
