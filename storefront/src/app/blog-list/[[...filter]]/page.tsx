// File: src/app/blog-list/[[...filter]]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { buildPageMetadata, SITE } from "@/lib/seo";
import {
  BLOG_POSTS,
  getCategories,
  getPostCategory,
} from "@/lib/blog";

const DESCRIPTION =
  "Job stories, guides and straight answers on invisible grills, pleated mosquito mesh and balcony safety across Delhi NCR.";


const PER_PAGE = 9;

// Every category/page combination is prebuilt; anything else 404s.
export const dynamicParams = false;

function postsFor(cat: string) {
  return cat === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => getPostCategory(post) === cat);
}

// Page 1 of "All" also holds the featured post, so it shows one extra.
function pageCountFor(cat: string) {
  const extra = cat === "All" ? 1 : 0;
  return Math.max(1, Math.ceil((postsFor(cat).length - extra) / PER_PAGE));
}

/** /blog-list, /blog-list/mesh, /blog-list/mesh/2, /blog-list/all/2 */
function pageHref(page: number, cat: string) {
  const slug = cat.toLowerCase();
  if (page === 1) return cat === "All" ? "/blog-list" : `/blog-list/${slug}`;
  return `/blog-list/${slug}/${page}`;
}

export function generateStaticParams() {
  return ["All", ...getCategories()].flatMap((cat) =>
    Array.from({ length: pageCountFor(cat) }, (_, i) => ({
      filter: pageHref(i + 1, cat).split("/").slice(2),
    }))
  );
}

interface BlogListProps {
  params: Promise<{ filter?: string[] }>;
}

function resolveFilter(filter: string[] = []) {
  const activeCat =
    ["All", ...getCategories()].find(
      (cat) => cat.toLowerCase() === (filter[0] ?? "all")
    ) ?? notFound();
  return { activeCat, page: Number(filter[1] ?? "1") };
}

// Each category/page is its own canonical URL with its own title, so Google indexes them separately.
export async function generateMetadata({
  params,
}: BlogListProps): Promise<Metadata> {
  const { activeCat, page } = resolveFilter((await params).filter);
  const pageSuffix = page > 1 ? `, Page ${page}` : "";
  const title =
    activeCat === "All"
      ? `Blog: Invisible Grill & Mesh Guides${pageSuffix} | Solution Sahab`
      : `${activeCat} Articles${pageSuffix} | Solution Sahab Blog`;
  const description =
    activeCat === "All"
      ? `${DESCRIPTION}${page > 1 ? ` Page ${page}.` : ""}`
      : `${activeCat} job stories and guides from Solution Sahab: invisible grills, pleated mesh and balcony safety across Delhi NCR.${page > 1 ? ` Page ${page}.` : ""}`;

  return buildPageMetadata({
    path: pageHref(page, activeCat),
    title,
    description,
    keywords: [
      "Solution Sahab blog",
      "Invisible grill blog Delhi NCR",
      "Pleated mesh guide",
      "Balcony safety grill articles",
    ],
  });
}

export default async function BlogListPage({ params }: BlogListProps) {
  const { activeCat, page } = resolveFilter((await params).filter);
  const filtered = postsFor(activeCat);
  const pageCount = pageCountFor(activeCat);
  const [featured, ...rest] = filtered;
  const showFeatured = activeCat === "All" && page === 1;
  const gridPosts =
    activeCat === "All"
      ? rest.slice((page - 1) * PER_PAGE, page * PER_PAGE)
      : filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Solution Sahab Blog",
    description: DESCRIPTION,
    url: `${SITE}${pageHref(page, activeCat)}`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Solution Sahab",
      url: SITE,
    },
    blogPost: filtered.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE}/${post.slug}`,
      datePublished: post.datePublished,
      image: post.image?.src,
      author: { "@type": "Organization", name: "Solution Sahab" },
    })),
  };

  return (
    <InfoPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <PageHero
        eyebrow="Blog"
        title="Notes from the field"
        description={DESCRIPTION}
        breadcrumbs={[{ label: "Blog" }]}
        image={{
          src: "/images/props/prop-delhi-skyline.webp",
          alt: "Delhi NCR high-rise skyline in the golden-hour haze, seen through a tall window",
        }}
        compact
      />

      <section
        className="w-full bg-white py-8 sm:py-12 scroll-mt-28"
        aria-label="Blog posts"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-8" role="navigation" aria-label="Categories">
            {["All", ...getCategories()].map((cat) => (
              <Link
                key={cat}
                href={pageHref(1, cat)}
                aria-current={activeCat === cat ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCat === cat
                    ? "bg-[#1B4D8E] text-white shadow-[0_8px_20px_-8px_rgb(27_77_142/0.6)]"
                    : "bg-[#F3F6FB] text-neutral-800 hover:bg-[#E8EEF7]"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {showFeatured && featured && (
            <Link
              href={`/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8 rounded-[2rem] bg-[#0F1B33] p-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]"
            >
              <div className="p-5 sm:p-9 flex flex-col justify-center gap-4 order-2 lg:order-1">
                <span className="self-start rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Latest</span>
                <h2 className="text-3xl sm:text-4xl font-gilroy font-extrabold tracking-tight m-0 leading-[1.1] group-hover:text-[#A8C4F5] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-base text-white/75 leading-relaxed m-0 line-clamp-3">
                  {featured.description}
                </p>
                <time
                  dateTime={featured.datePublished}
                  className="text-sm font-semibold text-white/60"
                >
                  {featured.dateLabel}
                </time>
              </div>
              <div className="relative w-full h-56 sm:h-72 lg:h-auto lg:min-h-80 overflow-hidden rounded-[1.5rem] bg-neutral-700 order-1 lg:order-2">
                {featured.image && (
                  <Image
                    src={featured.image.src}
                    alt={featured.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {pageCount > 1 && (
            <nav
              className="mt-12 flex items-center justify-center gap-3"
              aria-label="Blog pages"
            >
              {page > 1 && (
                <Link
                  href={pageHref(page - 1, activeCat)}
                  className="rounded-full px-5 py-2.5 border border-[#1B4D8E]/25 text-sm font-semibold text-[#1B4D8E] hover:bg-[#1B4D8E] hover:text-white transition-colors"
                >
                  Newer
                </Link>
              )}
              <span className="text-sm text-neutral-600">
                Page {page} of {pageCount}
              </span>
              {page < pageCount && (
                <Link
                  href={pageHref(page + 1, activeCat)}
                  className="rounded-full px-5 py-2.5 border border-[#1B4D8E]/25 text-sm font-semibold text-[#1B4D8E] hover:bg-[#1B4D8E] hover:text-white transition-colors"
                >
                  Older
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

    </InfoPage>
  );
}
