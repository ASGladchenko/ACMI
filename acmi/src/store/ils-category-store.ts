import { create } from 'zustand';

interface ILSCategory {
  id: number;
  category: string;
}

type ILSCategoryState = {
  ilsCategory: ILSCategory[];
  setILSCategory: (ilsCategory: ILSCategory[]) => void;
  getILSCategory: () => ILSCategory[];
};

export const useILSCategoryStore = create<ILSCategoryState>((set, get) => ({
  ilsCategory: [],
  setILSCategory: (ilsCategory: ILSCategory[]) => {
    set({ ilsCategory });
  },
  getILSCategory: () => get().ilsCategory,
}));
