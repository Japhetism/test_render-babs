import { StaticImageData } from "next/image";

export type CategoryDataTypes = {
  _id: string;
  name: string;
  img: string;
  description: string;
  total: number;
  bgColor: string;
};

export interface SelectedFilters {
  status: string;
  vendor: string;
}

export interface PaginationProps {
  totalPages?: number;
  pageNeighbours?: number;
  pageIndex: number;
  paginationRange?: (number | string)[];
  gotoPage: (pageIndex: number) => void;
}

export interface pickup_products {
  id: number;
  product_name: string;
  product_code: string;
  number_of_product: string;
}

// export interface FoodProduct {
//   _id: string;
//   image: StaticImageData;
//   name: string;
//   quantity: number;
//   price: number;
//   category: string;
//   location: string;
//   date: {
//     day: number;
//     month: string;
//     year: number;
//   };
// }

export type Product = {
  _id: string;
  name: string;
  price: number;
  length: number;
  breadth: number;
  width: number;
  quantity: number;
  region: string;
  description: string;
  isDeleted: boolean;
  images: string[];
  category: Category;
  brand: Brand;
  vendor: Vendor;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Category = CategoryDataTypes & {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Brand = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Vendor = {
  _id: string;
  name: string;
  description: string;
  address: string;
  noOfStaff: string;
  email: string;
  isDeleted: boolean;
  logo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ApiProductResponse = {
  page: number;
  perPage: number;
  totalProductCount: number;
  products: Product[];
};
