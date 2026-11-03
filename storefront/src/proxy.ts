// File: src/proxy.ts
import { NextResponse, type NextRequest } from "next/server";

// Old query-style blog list links (/blog-list?cat=Mesh&page=2) moved to prebuilt paths (/blog-list/mesh/2).
export function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const cat = (searchParams.get("cat") ?? "all").toLowerCase();
  const page = Number.parseInt(searchParams.get("page") ?? "1", 10) || 1;

  const url = request.nextUrl.clone();
  url.search = "";
  url.pathname =
    page > 1
      ? `/blog-list/${cat}/${page}`
      : cat === "all"
        ? "/blog-list"
        : `/blog-list/${cat}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    { source: "/blog-list", has: [{ type: "query", key: "cat" }] },
    { source: "/blog-list", has: [{ type: "query", key: "page" }] },
  ],
};
