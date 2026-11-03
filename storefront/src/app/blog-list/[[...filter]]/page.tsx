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
        compact
      />

      <section
        className="w-full bg-white py-10 sm:py-14 scroll-mt-28"
        aria-label="Blog posts"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-8" role="navigation" aria-label="Categories">
            {["All", ...getCategories()].map((cat) => (
              <Link
                key={cat}
                href={pageHref(1, cat)}
                aria-current={activeCat === cat ? "page" : undefined}
                className={`px-4 py-2 font-label-md text-label-md font-semibold transition-colors ${
                  activeCat === cat
                    ? "bg-ink text-white"
                    : "bg-paper-deep text-ink hover:bg-ink/10"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {showFeatured && featured && (
            <Link
              href={`/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 overflow-hidden border border-ink/15 bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <div className="p-6 sm:p-10 flex flex-col justify-center gap-4">
                <span className="kicker text-primary">Latest</span>
                <h2 className="font-display-serif text-3xl sm:text-4xl text-ink m-0 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed m-0 line-clamp-3">
                  {featured.description}
                </p>
                <time
                  dateTime={featured.datePublished}
                  className="font-label-sm text-label-sm font-semibold text-secondary"
                >
                  {featured.dateLabel}
                </time>
              </div>
              <div className="relative w-full min-h-64 lg:min-h-full overflow-hidden bg-paper-deep">
                {featured.image && (
                  <Image
                    src={featured.image.src}
                    alt={featured.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
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
              className="mt-10 flex items-center justify-center gap-3"
              aria-label="Blog pages"
            >
              {page > 1 && (
                <Link
                  href={pageHref(page - 1, activeCat)}
                  className="px-5 py-2.5 border border-ink/15 font-label-md text-label-md font-bold text-ink hover:bg-paper-deep transition-colors"
                >
                  Newer
                </Link>
              )}
              <span className="font-label-md text-label-md text-ink-soft">
                Page {page} of {pageCount}
              </span>
              {page < pageCount && (
                <Link
                  href={pageHref(page + 1, activeCat)}
                  className="px-5 py-2.5 border border-ink/15 font-label-md text-label-md font-bold text-ink hover:bg-paper-deep transition-colors"
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
