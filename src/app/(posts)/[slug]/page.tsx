// File: src/app/(posts)/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/BlogPostView";
import { BLOG_POSTS, getBlogPost, withBrand } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | Solution Sahab" };
  }

  return buildPageMetadata({
    path: `/${post.slug}`,
    title: withBrand(post.title),
    description: post.description,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.datePublished,
    image: post.image
      ? {
          url: post.image.src,
          alt: post.image.alt,
          width: 1440,
          height: 756,
        }
      : undefined,
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
