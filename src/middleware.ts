import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-token")?.value;

  const isAuthPath =
    request.nextUrl.pathname.startsWith("/auth/login") ||
    request.nextUrl.pathname.startsWith("/auth/register");

  const isProtectedPath = request.nextUrl.pathname === "/";

  if (isAuthPath && token) {
    const mainUrl = new URL("/", request.url);
    return NextResponse.redirect(mainUrl);
  }

  if (isProtectedPath && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
