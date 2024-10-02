import { FoodProduct } from "@/types/products";
import {
  coke,
  choco,
  canCoke,
  milkCake,
  bread,
  fruits,
  meats,
  foodStuff,
  diaryProducts,
  seaFood,
  vegetables,
  orange,
  strawberry
} from "../../public/assets/dashboard/product";

export const foodProducts: FoodProduct[] = [
  {
    _id: "#3a2e3",
    image: coke,
    name: "Coca-cola bottle",
    quantity: 0,
    price: 5000,
    category: "Beverages",
    location: "Lagos",
    date: {
      day: 15,
      month: "July",
      year: 2023
    }
  },
  {
    _id: "#sf456",
    image: choco,
    name: "Chocolate cake",
    quantity: 4,
    price: 200,
    category: "Food stuff",
    location: "Benin City",
    date: {
      day: 18,
      month: "September",
      year: 2023
    }
  },
  {
    _id: "#sf422",
    image: milkCake,
    name: "Milk cake",
    quantity: 4,
    price: 200,
    category: "Food stuff",
    location: "Benin City",
    date: {
      day: 18,
      month: "September",
      year: 2023
    }
  },
  {
    _id: "#435e4",
    image: bread,
    name: "Bread",
    quantity: 14,
    price: 2300,
    category: "Food stuff",
    location: "Port Harcourt",
    date: {
      day: 10,
      month: "September",
      year: 2023
    }
  },
  {
    _id: "#545gh",
    image: canCoke,
    name: "Can coke",
    quantity: 15,
    price: 2850,
    category: "Beverages",
    location: "Calabar",
    date: {
      day: 25,
      month: "August",
      year: 2023
    }
  },
  {
    _id: "e435f",
    image: fruits,
    name: "Apple",
    quantity: 3,
    price: 150,
    category: "Fruits",
    location: "Ibadan",
    date: {
      day: 12,
      month: "October",
      year: 2023
    }
  },
  {
    _id: "#4sfr",
    image: meats,
    name: "Beef",
    quantity: 2,
    price: 800,
    category: "Meat & Poultry",
    location: "Enugu",
    date: {
      day: 8,
      month: "November",
      year: 2023
    }
  },
  {
    _id: "#sdf55",
    image: vegetables,
    name: "Carrots",
    quantity: 2,
    price: 120,
    category: "Vegetables",
    location: "Kaduna",
    date: {
      day: 20,
      month: "October",
      year: 2023
    }
  },
  {
    _id: "#3e214",
    image: strawberry,
    name: "Strawberry",
    quantity: 2,
    price: 2300,
    category: "Fruits",
    location: "Abuja",
    date: {
      day: 20,
      month: "August",
      year: 2023
    }
  },
  {
    _id: "#6r421",
    image: orange,
    name: "Orange",
    quantity: 5,
    price: 2434,
    category: "Fruits",
    location: "Kano",
    date: {
      day: 5,
      month: "June",
      year: 2023
    }
  },
  {
    _id: "#5646d",
    image: fruits,
    name: "Apple",
    quantity: 5,
    price: 250,
    category: "Fruits",
    location: "Jos",
    date: {
      day: 13,
      month: "September",
      year: 2023
    }
  },
  {
    _id: "#2dr5f",
    image: diaryProducts,
    name: "Milk",
    quantity: 1,
    price: 100,
    category: "Diary products",
    location: "Lokoja",
    date: {
      day: 5,
      month: "November",
      year: 2023
    }
  },
  {
    _id: "#dftc2",
    image: vegetables,
    name: "Cabbage",
    quantity: 1,
    price: 80,
    category: "Vegetables",
    location: "Maiduguri",
    date: {
      day: 7,
      month: "October",
      year: 2023
    }
  },
  {
    _id: "#sht56",
    image: seaFood,
    name: "Fish",
    quantity: 2,
    price: 400,
    category: "Sea food",
    location: "Owerri",
    date: {
      day: 2,
      month: "November",
      year: 2023
    }
  },
  {
    _id: "#shtdc",
    image: foodStuff,
    name: "Semovita",
    quantity: 2,
    price: 400,
    category: "Food stuff",
    location: "Owerri",
    date: {
      day: 2,
      month: "November",
      year: 2023
    }
  }
];
