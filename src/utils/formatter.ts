
  
import { ZodError } from "zod";

type FormattedErrors = {
  [key: string]: string;
};

export const formatFormDataErrors = (error: ZodError, initialFormData: any): typeof initialFormData => {
  const errors: FormattedErrors = {};
  error.errors.forEach((e) => {
    errors[e.path.join('.')] = e.message;
  });
  return {...initialFormData, ...errors};
};

export const formatDateTime  = (dateTime: string): string => {

  if (!dateTime) return "";
  
  const date = new Date(dateTime);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  const isPM = hours >= 12;
  const formattedHours = hours % 12 || 12;

  const formattedDateTime = `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${isPM ? 'pm' : 'am'}`;

  return formattedDateTime

}


  
  