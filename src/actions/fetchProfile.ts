import { AdminProfile } from "@/types/profile";
import { adminRequestParams } from "@/utils/admin";
import { API } from "@/utils/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { profileResponse } from "@/mockresponses/profile";

export async function fetchProfile() {
  const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
  if (useMockData) {
    const res = await profileResponse();
    const user: AdminProfile = res.data;
    return user;
  }
  
  try {
    const accessToken = cookies().get("accessToken");
    const refreshToken = cookies().get("refreshToken");
    if (!refreshToken || !accessToken) {
      return null;
    }

    const req = await fetch(`${API}/profile`, {
      ...adminRequestParams(accessToken)
    });

    const res = await req.json();
    if ((res.statusCode && res.statusCode == 401) || res.hasError) {
      return null;
    }
    const user: AdminProfile = res.data;
    if (user) return user;
    return null;
  } catch (error) {
    return null;
  }
}
