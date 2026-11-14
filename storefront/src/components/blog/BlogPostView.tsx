import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { renderRichText } from "@/components/common/RichText";
import { SITE } from "@/lib/seo";
import { CONTACT_INFO } from "@/lib/constants";
import { Carousel } from "@/components/common/Carousel";
import {
  getReadingMinutes,
  getRelatedProductLink,
  getRelatedPosts,
  getReadTime,
  withBrand,
  type BlogPost,
} from "@/lib/blog";

interface BlogPostViewProps {
  post: BlogPost;
}

export function BlogPostView({ post }: BlogPostViewProps) {
  const relatedProduct = getRelatedProductLink(post);
  const relatedPosts = getRelatedPosts(post.slug);
  const crumbTitle =
    post.title.length > 60 ? `${post.title.slice(0, 60)}…` : post.title;
  const closingVariant =
    [...post.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 3;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image?.src,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Solution Sahab" },
    publisher: {
      "@type": "Organization",
      name: "Solution Sahab",
      url: SITE,
    },
    mainEntityOfPage: `${SITE}/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    timeRequired: `PT${getReadingMinutes(post)}M`,
  };

  return (
    <InfoPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        eyebrow="Solution Sahab Blog"
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { label: "Blog", href: "/blog-list" },
          { label: crumbTitle },
        ]}
        image={post.image}
      >
        <p className="mt-4 mb-0 text-xs sm:text-sm text-neutral-600">
          <time dateTime={post.datePublished} className="font-semibold text-neutral-950">
            {post.dateLabel}
          </time>
          <span aria-hidden="true"> | </span>
          {getReadTime(post)}
          <span aria-hidden="true"> | </span>
          Solution Sahab field team
        </p>
      </PageHero>

      {post.images && post.images.length > 0 && (
        <section className="w-full bg-white pt-8 sm:pt-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div
              className={`grid gap-3 sm:gap-4 ${
                post.images.length > 1
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-3xl"
              }`}
            >
              {post.images.map((image) => (
                <div
                  key={image.src}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.sections.length > 0 && (
        <section className="w-full bg-white py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28" aria-label="Article body">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl flex flex-col gap-8">
              {post.sections.map((articleSection) => (
                <section
                  key={articleSection.heading}
                  aria-label={articleSection.heading}
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-neutral-950 tracking-tight leading-snug m-0 mb-3">
                    {articleSection.heading}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {articleSection.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] sm:text-base text-neutral-700 leading-relaxed m-0"
                      >
                        {renderRichText(paragraph)}
                      </p>
                    ))}
                  </div>

                  {articleSection.items && articleSection.items.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2 list-none p-0 m-0">
                      {articleSection.items.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-[#1B4D8E] pl-3 text-[15px] sm:text-base text-neutral-700 leading-relaxed"
                        >
                          {renderRichText(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProduct && (
        <section
          className="w-full bg-neutral-50 py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
          aria-labelledby="related-product-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                id="related-product-heading"
                className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
              >
                About {relatedProduct.name}
              </h2>
              <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed mt-3 mb-0">
                {relatedProduct.intro}
              </p>
              <Link
                href={relatedProduct.href}
                className="mt-5 inline-flex items-center h-11 px-5 bg-neutral-950 text-white text-xs sm:text-sm font-gilroy font-extrabold uppercase tracking-wider hover:bg-[#1B4D8E] transition-colors"
              >
                View {relatedProduct.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section
        className="w-full bg-white py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
        aria-labelledby="blog-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {closingVariant === 0 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
                >
                  Talk it through with an installer
                </h2>
                <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed mt-2 mb-0">
                  Ten minutes on the phone settles spacing, shades and timing.
                  Call {CONTACT_INFO.PHONE_PRIMARY} any working day.
                </p>
              </div>
            )}
            {closingVariant === 1 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
                >
                  Send photos, get a range
                </h2>
                <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed mt-2 mb-0">
                  Two or three balcony photos on WhatsApp are enough for a
                  ballpark figure before anyone visits.
                </p>
              </div>
            )}
            {closingVariant === 2 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
                >
                  Tell us about the opening
                </h2>
                <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed mt-2 mb-0">
                  Rough size and suburb is plenty. We reply with a visit slot
                  and what to keep ready.
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              {closingVariant === 1 ? (
                <Button
                  href={CONTACT_INFO.WHATSAPP_URL}
                  variant="whatsapp"
                  size="md"
                  icon="chat"
                >
                  WhatsApp photos
                </Button>
              ) : closingVariant === 2 ? (
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="md"
                >
                  Contact us
                </Button>
              ) : (
                <Button
                  href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                  variant="primary"
                  size="md"
                  icon="call"
                >
                  {CONTACT_INFO.PHONE_PRIMARY}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section
          className="w-full bg-white py-10 sm:py-12 border-b border-neutral-300"
          aria-labelledby="related-posts-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E]">Keep reading</span>
                <h2
                  id="related-posts-heading"
                  className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight mt-2 mb-0"
                >
                  Related notes
                </h2>
              </div>
              <Link
                href="/blog-list"
                className="shrink-0 text-xs font-gilroy font-extrabold uppercase tracking-wider text-neutral-950 underline underline-offset-4 hover:opacity-70"
              >
                View all posts
              </Link>
            </div>
            {/* One-row swipe carousel (CSS scroll-snap), same as the homepage gallery */}
            <Carousel label="Related notes" className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {relatedPosts.map((related) => (
                <div
                  key={related.slug}
                  className="shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                >
                  <BlogCard post={related} />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </InfoPage>
  );
}

export function postMetaTitle(post: BlogPost) {
  return post.seoTitle ?? withBrand(post.title);
}
