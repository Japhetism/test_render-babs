import { NextRequest } from "next/server";

type LoginSchema = {
  email: string;
  password: string;
};

export async function GET(req: NextRequest) {
  const data: LoginSchema = await req.json();
}
