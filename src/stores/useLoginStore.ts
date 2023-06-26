import { VoidFunctionComponent } from "react";
import { create } from "zustand";

interface LoginStore {
  email: string;
  password: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const UseLoginStore = create<LoginStore>((set) => ({
  email: "",
  password: "",

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default UseLoginStore;
