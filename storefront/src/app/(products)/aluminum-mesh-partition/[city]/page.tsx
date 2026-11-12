// File: src/app/(products)/aluminum-mesh-partition/[city]/page.tsx
// City landing pages: SEO only, listed in the sitemap, not linked from the site.
import { cityRoute } from "@/components/product/common/ProductPageView";

const route = cityRoute("aluminum-mesh-partition");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
