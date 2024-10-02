import { ApiResponse } from "@/types/auth";
import { ApiProductResponse } from "@/types/products";
import { adminRequestParams } from "@/utils/admin";
import { API } from "@/utils/constants";
import { cookies } from "next/headers";
import { productsResponse } from "@/mockresponses/products";

export async function fetchProducts(queryParams: string) {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
  if (useMockData) {
    const res = await productsResponse();
    return res.data;
  }
  
  try {
    const accessToken = cookies().get("accessToken");
    if (!accessToken) return null;
    const req = await fetch(`${API}/product?${queryParams}`, {
      ...adminRequestParams(accessToken)
    });

    const res: ApiResponse = await req.json();
    if (res.statusCode === 200) {
      const products = res.data as ApiProductResponse;
      console.log({ products });
      return products;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
