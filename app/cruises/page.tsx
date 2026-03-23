import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TRIPJACK_PORTAL_URL } from "@/lib/booking-partner";

export const metadata: Metadata = {
  title: "Cruises | The Vacation Voice",
  description: "Explore cruise sailings with planning support and Tripjack-backed inventory where available.",
};

export default function CruisesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width py-12 md:py-20">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">Cruises</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Cruises</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Cruise inventory and amendments are available through{" "}
          <a
            href={TRIPJACK_PORTAL_URL}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Tripjack
          </a>
          for agents and integrated partners. Tell us your region, dates, and cabin class—we’ll align options and
          handle the details.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="rounded-xl shadow-sm" asChild>
            <a href={TRIPJACK_PORTAL_URL} target="_blank" rel="noreferrer">
              Open Tripjack portal
            </a>
          </Button>
          <Button variant="outline" className="rounded-xl shadow-sm" asChild>
            <Link href="/contact">Plan a cruise</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
