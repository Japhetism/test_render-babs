import {
  foodStuff,
  vegetables,
  fruits,
  meats,
  seaFood,
  beverages,
  diaryProducts
} from "../../public/assets/dashboard/product";
import { CategoryDataTypes } from "@/types/products";

export const categoriesData: CategoryDataTypes[] = [
  {
    _id: 1,
    name: "Food stuff",
    img: foodStuff,
    total: 20,
    bgColor: "#feefea"
  },
  {
    _id: 2,
    name: "Vegetables",
    img: vegetables,
    total: 230,
    bgColor: "#fff3ff"
  },
  {
    _id: 3,
    name: "Fruits",
    img: fruits,
    total: 10,
    bgColor: "#f2fce4"
  },
  {
    _id: 4,
    name: "Meat & Poultry",
    img: meats,
    total: 40,
    bgColor: "#feefea"
  },
  {
    _id: 5,
    name: "Sea food",
    img: seaFood,
    total: 23,
    bgColor: "#ecffec"
  },
  {
    _id: 6,
    name: "Beverages",
    img: beverages,
    total: 3,
    bgColor: "#fffceb"
  },
  {
    _id: 7,
    name: "Diary products",
    img: diaryProducts,
    total: 9,
    bgColor: "#def9ec"
  }
];
