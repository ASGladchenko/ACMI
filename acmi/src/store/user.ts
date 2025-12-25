import { create } from 'zustand';

import { Role } from '@/types';

export interface User {
  company: string;
  email: string;
  name: string;
  role: Role;
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
  role: Role.GUEST,
};

export const useUserStore = create<UserState>((set, get) => ({
  user: defaultUser,
  setUser: (user: User) => {
    set({ user });
  },
  getUser: () => get().user,
}));
