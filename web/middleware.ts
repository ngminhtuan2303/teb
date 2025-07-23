import { withAuth } from "next-auth/middleware";
import type { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { env } from "./env";

const debug = env.DEBUG_MIDDLEWARE;
const authEnabled = env.AUTH_ENABLED;

async function middleware(req: NextRequestWithAuth) {
  // if (authEnabled) {
  //   console.log("aaaaaaaaaaaaaaaaaaa");
  //   // if (debug) console.log("[MIDDLEWARE] Auth is disabled");
  //   return NextResponse.next();
  // }

  // const { nextauth, url } = req;
  // const token = nextauth.token?.access_token;
  // const isAuthed = Boolean(token?.length);

  // if (isAuthed) return NextResponse.next();

  // if (debug) console.log("[MIDDLEWARE] UNAUTHED REDIRECT");
  // return NextResponse.redirect(new URL("/auth/login", url));
  return NextResponse.next();
}

// export default withAuth(middleware);
export default withAuth(middleware, {
  callbacks: {
    authorized: () => true, // luôn cho phép
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - auth
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth).*)",
  ],
};
