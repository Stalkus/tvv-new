import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TRIPJACK_PORTAL_URL } from "@/lib/booking-partner";

export const metadata: Metadata = {
  title: "Holiday packages | The Vacation Voice",
  description: "Discover curated holiday packages across India and the world—family, couple, and group departures.",
};

export default function HolidayPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width py-12 md:py-20">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">Holiday</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Holiday packages</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          From weekend breaks to multi-country tours, explore itineraries organised by region. Land arrangements and
          supplier inventory are coordinated through our B2B partner{" "}
          <a
            href={TRIPJACK_PORTAL_URL}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Tripjack
          </a>
          , with The Vacation Voice handling planning and transparent inclusions.
        </p>
        <Button className="mt-8 rounded-xl shadow-sm" asChild>
          <Link href="/packages">Explore all packages</Link>
        </Button>
      </div>
    </div>
  );
}
