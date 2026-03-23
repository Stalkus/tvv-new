import type { PackageCardData } from "@/components/home/HomePackageSection";
import { domesticMegaColumns, internationalMegaColumns } from "@/lib/nav-mega-data";
import {
  andamanPackages,
  domesticPackages,
  europePackages,
  internationalPackages,
  northIndiaPackages,
  southIndiaPackages,
} from "@/lib/home-package-data";

export type PackageListingConfig = {
  path: string;
  title: string;
  metaDescription: string;
  intro: string[];
  heroImage: string;
  heroAlt: string;
  packages: PackageCardData[];
  breadcrumb: { label: string; href?: string }[];
};

const genericPool = (
  destination: string,
  theme: "beach" | "mountain" | "city" | "island" = "city"
): PackageCardData[] => {
  const imgs: Record<typeof theme, string> = {
    beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    city: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    island: "https://images.unsplash.com/photo-1583212292454-1fe62296026b?q=80&w=1200&auto=format&fit=crop",
  };
  const img = imgs[theme];
  const base = (i: number): PackageCardData => ({
    id: `gen-${destination}-${i}`,
    image: img,
    alt: `${destination} travel`,
    nights: `${5 + i} days & ${4 + i} nights`,
    rating: "4.6",
    reviews: "120+",
    title: `${destination} | Hand-picked stays & transfers`,
    stops: ["Flexible routing", "Expert support"],
    priceWas: `INR ${45 + i * 8},000`,
    save: `INR ${8 + i * 2},000`,
    priceNow: `INR ${37 + i * 6},500`,
  });
  return [base(0), base(1), base(2), base(3)];
};

export function collectPackagePathsFromNav(): string[] {
  const set = new Set<string>();
  for (const col of [...domesticMegaColumns, ...internationalMegaColumns]) {
    for (const { href } of col.links) {
      if (href.startsWith("/packages/")) {
        set.add(href.replace("/packages/", "").replace(/\/$/, ""));
      }
    }
  }
  set.add("domestic");
  set.add("international");
  set.add("north-india");
  set.add("south-india");
  set.add("europe");
  set.add("andaman");
  [
    "international/asia-pacific",
    "international/americas",
    "international/middle-east-africa",
    "international/indian-ocean",
  ].forEach((p) => set.add(p));
  return [...set].sort();
}

const themeForPath = (path: string): "beach" | "mountain" | "city" | "island" => {
  const p = path.toLowerCase();
  if (/(maldives|goa|beach|lakshadweep|andaman|bali|phuket|krabi|coast)/.test(p)) return "beach";
  if (/(ladakh|spiti|himachal|kashmir|uttarakhand|norway|iceland|switzerland|mountain)/.test(p))
    return "mountain";
  if (/(island|mauritius|seychelles)/.test(p)) return "island";
  return "city";
};

function titleFromPath(path: string): string {
  const last = path.split("/").pop() ?? path;
  return last
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const introDomestic = [
  "Explore India with curated stays, trusted drivers, and flexible itineraries—whether you want culture, nature, or beach time.",
  "Share your dates and departure city; we tailor pace, budget, and inclusions before you confirm.",
];

const introInternational = [
  "Our international packages combine vetted hotels, smooth transfers, and adjustable sightseeing—built for Indian travellers with clear inclusions.",
  "Flights can be bundled or booked yourself; we handle land services and support while you travel.",
];

const introRegion = (name: string) => [
  `Discover hand-picked experiences in ${name}: balanced day plans, downtime, and local experts when you want to go deeper.`,
  "Itineraries below are starting points—tell us your must-sees and we’ll shape the trip around you.",
];

export function getPackageListingConfig(pathKey: string): PackageListingConfig {
  const heroImage =
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop";

  if (pathKey === "domestic") {
    return {
      path: pathKey,
      title: "India tour packages",
      metaDescription:
        "Book India holiday packages—Rajasthan, Kerala, Ladakh, Andaman & more. Curated stays, transfers, and expert planning.",
      intro: introDomestic,
      heroImage,
      heroAlt: "India travel — The Vacation Voice",
      packages: domesticPackages,
      breadcrumb: [{ label: "Packages", href: "/packages" }],
    };
  }

  if (pathKey === "international") {
    return {
      path: pathKey,
      title: "International tour packages",
      metaDescription:
        "Global holidays from India—Europe, Japan, Dubai, Thailand, Maldives & more. Transparent pricing and support.",
      intro: introInternational,
      heroImage,
      heroAlt: "International travel — The Vacation Voice",
      packages: internationalPackages,
      breadcrumb: [{ label: "Packages", href: "/packages" }],
    };
  }

  if (pathKey === "north-india") {
    return {
      path: pathKey,
      title: "North India tour packages",
      metaDescription:
        "North India holidays—Kashmir, Ladakh, Golden Triangle, Uttarakhand & more. Curated stays and transfers.",
      intro: introRegion("North India"),
      heroImage:
        "https://images.unsplash.com/photo-1566836610610-2a9b6b6e4b8a?q=80&w=1400&auto=format&fit=crop",
      heroAlt: "North India travel",
      packages: northIndiaPackages,
      breadcrumb: [
        { label: "Packages", href: "/packages" },
        { label: "India", href: "/packages/domestic" },
      ],
    };
  }

  if (pathKey === "south-india") {
    return {
      path: pathKey,
      title: "South India tour packages",
      metaDescription:
        "South India getaways—Kerala, Tamil Nadu, Karnataka, hill stations & beaches with flexible itineraries.",
      intro: introRegion("South India"),
      heroImage:
        "https://images.unsplash.com/photo-1506461883086-45759aedb972?q=80&w=1400&auto=format&fit=crop",
      heroAlt: "South India travel",
      packages: southIndiaPackages,
      breadcrumb: [
        { label: "Packages", href: "/packages" },
        { label: "India", href: "/packages/domestic" },
      ],
    };
  }

  if (pathKey === "international/europe") {
    const base = getPackageListingConfig("europe");
    return { ...base, path: pathKey };
  }

  if (pathKey === "europe") {
    return {
      path: pathKey,
      title: "Europe tour packages",
      metaDescription:
        "Europe packages from India—Schengen-ready itineraries, central stays, and flexible sightseeing.",
      intro: introRegion("Europe"),
      heroImage:
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1400&auto=format&fit=crop",
      heroAlt: "Europe landscape",
      packages: europePackages,
      breadcrumb: [
        { label: "Packages", href: "/packages" },
        { label: "International", href: "/packages/international" },
      ],
    };
  }

  if (pathKey === "andaman") {
    return {
      path: pathKey,
      title: "Andaman tour packages",
      metaDescription:
        "Andaman Nicobar packages—Havelock, Neil, Port Blair with ferries, beach stays, and activities.",
      intro: introRegion("the Andaman Islands"),
      heroImage:
        "https://images.unsplash.com/photo-1583212292454-1fe62296026b?q=80&w=1400&auto=format&fit=crop",
      heroAlt: "Andaman beach",
      packages: andamanPackages,
      breadcrumb: [
        { label: "Packages", href: "/packages" },
        { label: "India", href: "/packages/domestic" },
      ],
    };
  }

  const scope = pathKey.startsWith("domestic/")
    ? "domestic"
    : pathKey.startsWith("international/")
      ? "international"
      : "region";
  const display = titleFromPath(pathKey);
  const title = `${display} tour packages`;
  const intro =
    scope === "domestic"
      ? introDomestic
      : scope === "international"
        ? introInternational
        : introRegion(display);

  const breadcrumb: PackageListingConfig["breadcrumb"] = [{ label: "Packages", href: "/packages" }];
  if (scope === "domestic") breadcrumb.push({ label: "India", href: "/packages/domestic" });
  if (scope === "international") breadcrumb.push({ label: "International", href: "/packages/international" });

  return {
    path: pathKey,
    title,
    metaDescription: `Book ${title} with The Vacation Voice—hotels, transfers, and flexible plans. Enquire for pricing.`,
    intro,
    heroImage,
    heroAlt: `${title} — The Vacation Voice`,
    packages: genericPool(display, themeForPath(pathKey)),
    breadcrumb,
  };
}
