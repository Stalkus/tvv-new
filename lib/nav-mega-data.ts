/** Column groups for header mega menus (Thrillophilia-style layout, TVV destinations). */

export type MegaColumn = {
  title: string;
  links: { label: string; href: string }[];
  /** Highlight column (e.g. trending strip) */
  variant?: "default" | "highlight";
};

export const domesticMegaColumns: MegaColumn[] = [
  {
    title: "Popular regions",
    links: [
      { label: "Rajasthan Tour Packages", href: "/packages/domestic/rajasthan" },
      { label: "Kerala Tour Packages", href: "/packages/domestic/kerala" },
      { label: "Himachal Tour Packages", href: "/packages/domestic/himachal" },
      { label: "Uttarakhand Tour Packages", href: "/packages/domestic/uttarakhand" },
      { label: "Goa Tour Packages", href: "/packages/domestic/goa" },
    ],
  },
  {
    title: "Islands & beaches",
    links: [
      { label: "Andaman Tour Packages", href: "/packages/andaman" },
      { label: "Lakshadweep Getaways", href: "/packages/domestic/lakshadweep" },
      { label: "Goa Beach Holidays", href: "/packages/domestic/goa-beach" },
    ],
  },
  {
    title: "Mountains & north-east",
    links: [
      { label: "Ladakh Tour Packages", href: "/packages/domestic/ladakh" },
      { label: "North East India", href: "/packages/domestic/north-east" },
      { label: "Kashmir Tour Packages", href: "/packages/domestic/kashmir" },
      { label: "Sikkim & Darjeeling", href: "/packages/domestic/sikkim" },
    ],
  },
  {
    title: "Trending in India",
    variant: "highlight",
    links: [
      { label: "Spiti Valley Road Trip", href: "/packages/domestic/spiti" },
      { label: "Rann of Kutch", href: "/packages/domestic/kutch" },
      { label: "Coorg & Chikmagalur", href: "/packages/domestic/coorg" },
      { label: "Varanasi & Prayagraj", href: "/packages/domestic/varanasi" },
    ],
  },
];

export const internationalMegaColumns: MegaColumn[] = [
  {
    title: "Popular long breaks",
    links: [
      { label: "Europe Tour Packages", href: "/packages/international/europe" },
      { label: "Switzerland Tour Packages", href: "/packages/international/switzerland" },
      { label: "Japan Tour Packages", href: "/packages/international/japan" },
      { label: "Australia & New Zealand", href: "/packages/international/aus-nz" },
    ],
  },
  {
    title: "Popular short breaks",
    links: [
      { label: "Dubai Tour Packages", href: "/packages/international/dubai" },
      { label: "Thailand Tour Packages", href: "/packages/international/thailand" },
      { label: "Singapore & Malaysia", href: "/packages/international/singapore" },
      { label: "Vietnam Tour Packages", href: "/packages/international/vietnam" },
    ],
  },
  {
    title: "Honeymoon tour packages",
    links: [
      { label: "Bali Honeymoon Packages", href: "/packages/international/bali" },
      { label: "Maldives Honeymoon Packages", href: "/packages/international/maldives" },
      { label: "Mauritius Honeymoon", href: "/packages/international/mauritius" },
      { label: "Seychelles Honeymoon", href: "/packages/international/seychelles" },
    ],
  },
  {
    title: "Trending this month",
    variant: "highlight",
    links: [
      { label: "Iceland Northern Lights", href: "/packages/international/iceland" },
      { label: "Norway Fjords", href: "/packages/international/norway" },
      { label: "Bhutan Cultural Trail", href: "/packages/international/bhutan" },
      { label: "Turkey Highlights", href: "/packages/international/turkey" },
    ],
  },
];
