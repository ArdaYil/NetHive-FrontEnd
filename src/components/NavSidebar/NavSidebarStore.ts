import { create } from "zustand";

interface NavSidebarStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const navSidebarStore = create<NavSidebarStore>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}));

export default navSidebarStore;
