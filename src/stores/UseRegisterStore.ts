import { create } from "zustand";

interface RegisterState {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthdate: Date;
  gender: string;
  newsletter: boolean;
  termsOfService: boolean;
  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setBirthdate: (birthdate: Date) => void;
  setGender: (gender: string) => void;
  setNewsletter: (newsletter: boolean) => void;
  setTermsOfService: (termsOfService: boolean) => void;
}

const useRegisterStore = create<RegisterState>((set) => ({
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthdate: new Date(),
  gender: "",
  newsletter: false,
  termsOfService: false,
  setName: (name) => set({ name }),
  setSurname: (surname) => set({ surname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setBirthdate: (birthdate) => set({ birthdate }),
  setGender: (gender) => set({ gender }),
  setNewsletter: (newsletter) => set({ newsletter }),
  setTermsOfService: (termsOfService) => set({ termsOfService }),
}));

export default useRegisterStore;
