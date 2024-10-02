export type FormActionResponse<T> = {
  success: boolean;
  errors: T;
  message: string;
};

export type ApiFormResponse = {
  hasError: boolean;
  message: string;
  data?: {
    [key: string]: any;
  };
};

export type ApiResponse = ApiFormResponse & {
  statusCode: number;
};
