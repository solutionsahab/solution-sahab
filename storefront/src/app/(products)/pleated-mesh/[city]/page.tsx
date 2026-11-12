// File: src/app/(products)/pleated-mesh/[city]/page.tsx
// City landing pages: SEO only, listed in the sitemap, not linked from the site.
import { cityRoute } from "@/components/product/common/ProductPageView";

const route = cityRoute("pleated-mesh");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
