import { ApiResponse } from "@/types/auth";
import { Brand } from "@/types/products";
import { adminRequestParams } from "@/utils/admin";
import { API } from "@/utils/constants";
import { cookies } from "next/headers";
import { brandsResponse } from "@/mockresponses/brands";

export async function fetchBrands() {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
  if (useMockData) {
    const res = await brandsResponse();
    return res.data as Brand[];
  }
  
  try {
    const accessToken = cookies().get("accessToken");
    if (!accessToken) return null;
    const req = await fetch(`${API}/product/brand`, {
      ...adminRequestParams(accessToken)
    });
    const res: ApiResponse = await req.json();
    if (res.statusCode === 200) return res.data as Brand[];
    return null;
  } catch (error) {
    return null;
  }
}
