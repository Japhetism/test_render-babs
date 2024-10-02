import { ApiResponse } from "@/types/auth";
import { adminRequestParams } from "@/utils/admin";
import { API } from "@/utils/constants";
import { cookies } from "next/headers";
import { vendorsResponse } from "@/mockresponses/vendors";

export async function fetchVendors() {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
  if (useMockData) {
    const res = await vendorsResponse();
    return res.data;
  }

  try {
    const accessToken = cookies().get("accessToken");
    if (!accessToken) return null;
    const req = await fetch(`${API}/vendor`, {
      ...adminRequestParams(accessToken)
    });

    const res: ApiResponse = await req.json();
    
    if (res.statusCode === 200) return res.data;
    return null;
  } catch (error) {
    return null;
  }
}
