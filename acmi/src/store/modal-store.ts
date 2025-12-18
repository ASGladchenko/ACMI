import { create } from 'zustand';

type UseModal = {
  isOpenLeonModal: boolean;
  setIsOpenLeonModal: (isOpen: boolean) => void;
};

export const useModalLeonStore = create<UseModal>((set) => ({
  isOpenLeonModal: false,
  setIsOpenLeonModal: (value) => {
    set({ isOpenLeonModal: value });
  },
}));
