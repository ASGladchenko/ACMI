import { create } from 'zustand';

export interface NoiseStage {
  id: number;
  noise_stage: string;
}

type NoiseStageState = {
  noiseStage: NoiseStage[];
  setNoiseStage: (noiseStage: NoiseStage[]) => void;
  getNoiseStage: () => NoiseStage[];
};

export const useNoiseStageStore = create<NoiseStageState>((set, get) => ({
  noiseStage: [],
  setNoiseStage: (noiseStage: NoiseStage[]) => {
    set({ noiseStage });
  },
  getNoiseStage: () => get().noiseStage,
}));
