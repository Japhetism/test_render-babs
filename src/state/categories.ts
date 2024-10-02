import { CategoryDataTypes } from "@/types/products";
import { create } from "zustand";

export type CategoryStoreProps = {
  categories?: CategoryDataTypes[];
  setCategories: (categories: CategoryDataTypes[]) => void;
};

export const useCategoryStore = create<CategoryStoreProps>(set => {
  return {
    categories: undefined,
    setCategories: (categories: CategoryDataTypes[]) =>
      set(state => ({ categories }))
  };
});
