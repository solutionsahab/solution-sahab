// File: src/app/home.md/route.ts
// Markdown version of the homepage for AI agents. "/" is rewritten here when the request
// sends Accept: text/markdown (next.config.ts). The text is public/llms.txt, kept in one place.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const markdown = await readFile(join(process.cwd(), "public", "llms.txt"), "utf8");
  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
