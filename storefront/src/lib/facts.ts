// File: src/lib/facts.ts
// Single source of truth for business facts used across the site.
// Values below are the MOST CONSERVATIVE figures found on live pages:
// the live site contradicts itself (6+ vs 10 years; 150+ vs 3,500+ jobs),
// so we use the lower, defensible number everywhere until the owner confirms.
// Update these in one place and every component follows.

export const FACTS = {
  /** Conservative: hero and footer claim "6+ Years". One post claims 10. */
  yearsExperience: "6+",
  yearsExperienceLabel: "6+ years in the field",
  /**
   * Conservative: Dehradun post claims "150+ Happy Customers".
   * WhyUs claims "3,500+ handovers" (unverified scale; do not use
   * customer counts above this without owner confirmation).
   */
  happyCustomers: "150+",
  /** Consistent across all live pages. */
  warrantyLabel: "5-year anti-rust warranty",
  /** From the rooftop Delhi NCR post. */
  serviceAreas: [
    "Delhi",
    "Noida",
    "Greater Noida",
    "Gurugram",
    "Ghaziabad",
    "Faridabad",
  ] as const,
  serviceAreasLabel: "Delhi, Noida, Greater Noida, Gurugram, Ghaziabad & Faridabad",
  brandName: "Solution Sahab",
  phoneDisplay: "99711 43143",
} as const;
