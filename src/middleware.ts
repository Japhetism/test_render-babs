import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/chat",
  "/orders",
  "/payment",
  "/pick-up",
  "/products",
  "/role-management"
];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const firstPath = pathname.split("/")[1];
  if (protectedRoutes.includes(`/${firstPath}`)) {
    const hasToken = req.cookies.has("accessToken");
    const hasRefreshToken = req.cookies.has("refreshToken");
    if (!(hasRefreshToken && hasToken)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
