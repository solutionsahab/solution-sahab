import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { renderRichText } from "@/components/common/RichText";
import { SITE } from "@/lib/seo";
import { CONTACT_INFO } from "@/const";
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
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <time
            dateTime={post.datePublished}
            className="inline-flex items-center gap-1.5 font-label-sm text-label-sm font-semibold text-secondary"
          >
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              calendar_today
            </span>
            {post.dateLabel}
          </time>
          <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-ink-soft">
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              schedule
            </span>
            {getReadTime(post)}
          </span>
          <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-ink-soft">
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              account_circle
            </span>
            Solution Sahab field team
          </span>
        </div>
      </PageHero>

      {post.images && post.images.length > 0 && (
        <section className="w-full bg-white py-6 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className={`grid gap-4 ${
                post.images.length > 1
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {post.images.map((image) => (
                <div
                  key={image.src}
                  className="relative w-full aspect-[16/10] overflow-hidden border border-ink/10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.sections.length > 0 && (
        <section className="w-full bg-white py-6 sm:py-10" aria-label="Article body">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col gap-10">
              {post.sections.map((articleSection) => (
                <section
                  key={articleSection.heading}
                  aria-label={articleSection.heading}
                >
                  <h2 className="font-display-serif text-3xl text-ink leading-tight m-0 mb-4">
                    {articleSection.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {articleSection.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-body-md text-body-md text-ink-soft leading-relaxed m-0"
                      >
                        {renderRichText(paragraph)}
                      </p>
                    ))}
                  </div>

                  {articleSection.items && articleSection.items.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-2.5 list-none p-0 m-0">
                      {articleSection.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 font-body-md text-body-md text-ink"
                        >
                          <span
                            className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            done
                          </span>
                          <span>{renderRichText(item)}</span>
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
          className="w-full bg-paper py-8 sm:py-12 scroll-mt-28"
          aria-labelledby="related-product-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto lg:mx-0 card-flat p-6 sm:p-8">
              <h2
                id="related-product-heading"
                className="font-display-serif text-3xl text-ink m-0"
              >
                About {relatedProduct.name}
              </h2>
              <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-4 mb-0">
                {relatedProduct.intro}
              </p>
              <Link
                href={relatedProduct.href}
                className="mt-6 inline-flex items-center gap-2 h-11 px-5 bg-ink text-white font-label-md text-label-md font-bold hover:bg-primary transition-colors"
              >
                View {relatedProduct.name}
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section
        className="w-full bg-white py-8 sm:py-12 scroll-mt-28"
        aria-labelledby="blog-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border border-ink/15 bg-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {closingVariant === 0 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-display-serif text-3xl text-ink m-0"
                >
                  Talk it through with an installer
                </h2>
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
                  Ten minutes on the phone settles spacing, shades and timing.
                  Call {CONTACT_INFO.PHONE_PRIMARY} any working day.
                </p>
              </div>
            )}
            {closingVariant === 1 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-display-serif text-3xl text-ink m-0"
                >
                  Send photos, get a range
                </h2>
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
                  Two or three balcony photos on WhatsApp are enough for a
                  ballpark figure before anyone visits.
                </p>
              </div>
            )}
            {closingVariant === 2 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-display-serif text-3xl text-ink m-0"
                >
                  Tell us about the opening
                </h2>
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
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
                  icon="arrow_forward"
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
          className="w-full bg-paper py-8 sm:py-12"
          aria-labelledby="related-posts-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <span className="kicker text-primary">Keep reading</span>
                <h2
                  id="related-posts-heading"
                  className="font-display-serif text-3xl text-ink mt-3 mb-0"
                >
                  Related notes
                </h2>
              </div>
              <Link
                href="/blog-list"
                className="font-label-md text-label-md font-semibold text-secondary hover:underline whitespace-nowrap"
              >
                View all posts
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </InfoPage>
  );
}

export function postMetaTitle(post: BlogPost) {
  return post.seoTitle ?? withBrand(post.title);
}
