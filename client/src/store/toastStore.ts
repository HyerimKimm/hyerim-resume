import { toastItem } from 'types/toast';
import { SetState, create } from 'zustand';
import { devtools } from 'zustand/middleware';

type toastStateType = {
  toastList: toastItem[];
  setToastList: (payload: toastItem[]) => void;
};

const store = (set: SetState<toastStateType>): toastStateType => ({
  toastList: [],
  setToastList: (payload: toastItem[]) => set({ toastList: [...payload] }),
});

export const toastStore = create<toastStateType>(store);
