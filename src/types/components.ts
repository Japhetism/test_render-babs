// import { StaticImageData } from "next/image";

export interface SelectType {
  id?: string;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  bodyClassName?: string;
  selectClassName?: string;
  iconClassName?: string;
  name?: string;
  disabled?: boolean
}

export interface InputType {
  placeholder?: string;
  type?: string;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  value?: string | number;
  id?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type userDataTypes = {
  id: number;
  name: string;
  avatarSrc: string;
  isOnline: boolean;
  isActive: boolean;
  lastSeen: string;
};

export type orderListUserTypes = {
  id: number;
  name: string;
  phone: string;
  email: string;
  location: string;
  date: string;
  IdNumber: string;
  amount: number;
  payment: boolean;
  products: object;
};
