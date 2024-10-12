import { NextRequest, NextResponse } from "next/server";
import { PROTECTED_PATH, PUBLIC_PATH } from "./utils/path";

export default async function middleware(req: NextRequest) {
  const path = `/${req.nextUrl.pathname.split("/").pop()}`;

  const isProtected = PROTECTED_PATH.includes(path);
  const isPublic = PUBLIC_PATH.includes(path);

  const cookie = req.cookies.get("token");

  if (!cookie?.value && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (cookie?.value && isPublic) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.ico$|.*\\.jpeg$).*)",
  ],
};