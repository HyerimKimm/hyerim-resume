import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type isDarkStateType = {
  isDark: boolean;
  setIsDark: (payload: boolean) => void;
};

export const isDarkStore = create<isDarkStateType>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        setIsDark: (payload) => set(() => ({ isDark: payload })),
      }),
      {
        name: 'isDark-storage',
      }
    )
  )
);
