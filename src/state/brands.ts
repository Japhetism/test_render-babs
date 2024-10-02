import { Brand } from "@/types/products";
import { create } from "zustand";

export type BrandStoreProps = {
  brands?: Brand[];
  setBrands: (brands: Brand[]) => void;
};

export const useBrandStore = create<BrandStoreProps>(set => {
  return {
    brands: undefined,
    setBrands: (brands: Brand[]) => set(state => ({ brands }))
  };
});
