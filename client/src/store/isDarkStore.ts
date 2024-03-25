import { SetState, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type isDarkStateType = {
  isDark: boolean;
  setIsDark: (payload: boolean) => void;
};

const store = (set: SetState<isDarkStateType>) => ({
  isDark: false,
  setIsDark: (payload: boolean) => set(() => ({ isDark: payload })),
});

export const isDarkStore = create<isDarkStateType>()(
  devtools(
    persist(store, {
      name: 'isDark-storage',
    })
  )
);
