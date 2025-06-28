import { create } from 'zustand';

export interface User {
  company: string;
  email: string;
  name: string;
  role: string;
}

type UserState = {
  user: User;
  setUser: (user: User) => void;
  getUser: () => User;
};

const defaultUser = {
  company: '',
  email: '',
  name: '',
  role: '',
};

export const useUserStore = create<UserState>((set, get) => ({
  user: defaultUser,
  setUser: (user: User) => {
    set({ user });
  },
  getUser: () => get().user,
}));
