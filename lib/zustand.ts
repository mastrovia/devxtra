import { create } from 'zustand';

interface Store {
  joinForm: {
    open: boolean;
    setOpen: (open: boolean) => void;
  };
}

const useStore = create<Store>((set) => ({
  joinForm: {
    open: false,
    setOpen: (open: boolean) => set((state) => ({ joinForm: { ...state.joinForm, open } })),
  },
}));

export default useStore;
