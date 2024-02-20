import { create } from "zustand";

export const useInfo = create((set) => ({
  name: "",
  image: "",
  number: "",
  email: "",
  password: "",
  location: "",
  facebook: "",
  setName: (name) => set({ name }),
  setImage: (image) => set({ image }),
  setNumber: (number) => set({ number }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setLocation: (location) => set({ location }),
  setFacebook: (facebook) => set({ facebook }),
}));
