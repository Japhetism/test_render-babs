import { AdminProfile } from "@/types/profile";
import { create } from "zustand";

export type UserStoreProps = {
  user?: AdminProfile;
  setUser: (user: AdminProfile) => void;
};

export const useUserStore = create<UserStoreProps>(set => ({
  user: undefined,
  setUser: (user: AdminProfile) => set(state => ({ user }))
}));
