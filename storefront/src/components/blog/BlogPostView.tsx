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
        <section className="w-full bg-white pt-12 sm:pt-16">
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
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-200"
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
        <section className="w-full bg-white py-8 sm:py-12 scroll-mt-28" aria-label="Article body">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 max-w-3xl flex flex-col gap-10">
              {post.sections.map((articleSection, sectionIndex) => (
                <section
                  key={articleSection.heading}
                  id={`part-${sectionIndex + 1}`}
                  aria-label={articleSection.heading}
                  className="scroll-mt-32"
                >
                  <h2 className="font-gilroy font-extrabold text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-snug m-0 mb-4">
                    {articleSection.heading}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {articleSection.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base sm:text-[17px] text-neutral-700 leading-[1.8] m-0"
                      >
                        {renderRichText(paragraph)}
                      </p>
                    ))}
                  </div>

                  {articleSection.items && articleSection.items.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-3 list-none p-0 m-0">
                      {articleSection.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl bg-[#F3F6FB] px-5 py-4 text-base text-neutral-700 leading-relaxed"
                        >
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#1B4D8E]" aria-hidden="true" />
                          <span>{renderRichText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="lg:col-span-4" aria-label="On this page">
              <div className="lg:sticky lg:top-32 flex flex-col gap-5">
                {post.sections.length > 2 && (
                  <nav className="hidden lg:block rounded-[1.5rem] bg-[#F3F6FB] p-6" aria-label="Sections in this article">
                    <p className="m-0 mb-3 text-sm font-semibold text-neutral-500">On this page</p>
                    <ol className="list-none m-0 p-0 flex flex-col gap-2.5 text-sm">
                      {post.sections.map((articleSection, sectionIndex) => (
                        <li key={articleSection.heading}>
                          <a href={`#part-${sectionIndex + 1}`} className="text-neutral-700 hover:text-[#1B4D8E] leading-snug">
                            {articleSection.heading}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <div className="rounded-[1.5rem] bg-[#1B4D8E] p-6 text-white">
                  <p className="m-0 font-gilroy font-extrabold text-xl">Planning an install?</p>
                  <p className="m-0 mt-2 text-sm text-white/80 leading-relaxed">
                    Call or WhatsApp a few photos of your opening and we&apos;ll suggest the right system.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`} variant="white" size="sm" icon="call">
                      Call
                    </Button>
                    <Button href={CONTACT_INFO.WHATSAPP_URL} variant="whatsapp" size="sm" icon="chat">
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}

      {relatedProduct && (
        <section
          className="w-full bg-[#F3F6FB] py-10 sm:py-12 lg:py-14 scroll-mt-28"
          aria-labelledby="related-product-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                id="related-product-heading"
                className="font-gilroy font-extrabold text-3xl sm:text-4xl text-neutral-950 tracking-tight leading-[1.1] m-0"
              >
                About {relatedProduct.name}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4 mb-0">
                {relatedProduct.intro}
              </p>
              <Link
                href={relatedProduct.href}
                className="mt-6 inline-flex items-center h-12 px-7 rounded-full bg-[#1B4D8E] text-white text-sm font-semibold hover:bg-[#143A6B] transition-colors shadow-[0_8px_20px_-8px_rgb(27_77_142/0.6)]"
              >
                View {relatedProduct.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section
        className="w-full bg-white py-10 sm:py-12 lg:py-14 scroll-mt-28"
        aria-labelledby="blog-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] bg-[#0F1B33] text-white p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {closingVariant === 0 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-gilroy font-extrabold text-3xl sm:text-4xl tracking-tight m-0"
                >
                  Talk it through with an installer
                </h2>
                <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-3 mb-0">
                  Ten minutes on the phone settles spacing, shades and timing.
                  Call {CONTACT_INFO.PHONE_PRIMARY} any working day.
                </p>
              </div>
            )}
            {closingVariant === 1 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-gilroy font-extrabold text-3xl sm:text-4xl tracking-tight m-0"
                >
                  Send photos, get a range
                </h2>
                <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-3 mb-0">
                  Two or three balcony photos on WhatsApp are enough for a
                  ballpark figure before anyone visits.
                </p>
              </div>
            )}
            {closingVariant === 2 && (
              <div className="max-w-2xl">
                <h2
                  id="blog-cta-heading"
                  className="font-gilroy font-extrabold text-3xl sm:text-4xl tracking-tight m-0"
                >
                  Tell us about the opening
                </h2>
                <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-3 mb-0">
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
                  variant="white"
                  size="lg"
                >
                  Contact us
                </Button>
              ) : (
                <Button
                  href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                  variant="white"
                  size="lg"
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
          className="w-full bg-[#F3F6FB] py-10 sm:py-12 lg:py-14"
          aria-labelledby="related-posts-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                                <h2
                  id="related-posts-heading"
                  className="font-gilroy font-extrabold text-3xl sm:text-4xl text-neutral-950 tracking-tight leading-[1.1] m-0"
                >
                  Related notes
                </h2>
              </div>
              <Link
                href="/blog-list"
                className="shrink-0 text-sm font-semibold text-[#1B4D8E] hover:underline underline-offset-4"
              >
                View all posts
              </Link>
            </div>
            {/* One-row swipe carousel (CSS scroll-snap), same as the homepage gallery */}
            <Carousel label="Related notes" className="flex gap-5 overflow-x-auto py-4 -my-4 snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {relatedPosts.map((related) => (
                <div
                  key={related.slug}
                  className="shrink-0 snap-start w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
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
