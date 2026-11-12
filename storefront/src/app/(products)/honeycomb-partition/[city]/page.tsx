// File: src/app/(products)/honeycomb-partition/[city]/page.tsx
// City landing pages: SEO only, listed in the sitemap, not linked from the site.
import { cityRoute } from "@/components/product/common/ProductPageView";

const route = cityRoute("honeycomb-partition");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
