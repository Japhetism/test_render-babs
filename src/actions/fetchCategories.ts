import { ApiResponse } from "@/types/auth";
import { adminRequestParams } from "@/utils/admin";
import { API } from "@/utils/constants";
import { cookies } from "next/headers";
import { categoriesResponse } from "@/mockresponses/categories";

export async function fetchCategories() {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
  if (useMockData) {
    const res = await categoriesResponse();
    return res.data.successList;
  }
  
  try {
    const accessToken = cookies().get("accessToken");
    if (!accessToken) return null;
    const req = await fetch(`${API}/product/category`, {
      ...adminRequestParams(accessToken)
    });

    const res: ApiResponse = await req.json();
    if (res.statusCode === 200) return res.data;
    return null;
  } catch (error) {
    return null;
  }
}
