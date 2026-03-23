"use client";

import { useState } from "react";
import { TRIPJACK_PORTAL_URL, buildFlightSearchUrl } from "@/lib/booking-partner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function FlightSearchForm({ className }: { className?: string }) {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("roundtrip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("1");
  const [hint, setHint] = useState<string | null>(null);

  const hasSearchBase = Boolean(process.env.NEXT_PUBLIC_TRIPJACK_FLIGHT_SEARCH_URL?.trim());

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHint(null);
    const url = buildFlightSearchUrl({
      origin,
      destination,
      depart,
      returnDate,
      adults,
      tripType,
    });
    if (url) {
      window.location.assign(url);
      return;
    }
    setHint(
      "Flight search deep link is not configured. Add NEXT_PUBLIC_TRIPJACK_FLIGHT_SEARCH_URL to your environment with the URL Tripjack provides, or continue in the Tripjack portal."
    );
  }

  return (
    <div className={cn("rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8", className)}>
      <h2 className="text-lg font-bold text-foreground md:text-xl">Search flights</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter route and dates—we send you to Tripjack-powered results when your search URL is configured.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["roundtrip", "Round trip"],
              ["oneway", "One way"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setTripType(value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                tripType === value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-zinc-50 text-foreground/80 hover:bg-zinc-100"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">From</span>
            <Input
              name="origin"
              placeholder="City or airport code (e.g. DEL)"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="rounded-xl"
              autoComplete="off"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">To</span>
            <Input
              name="destination"
              placeholder="City or airport code (e.g. BOM)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="rounded-xl"
              autoComplete="off"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Depart</span>
            <Input
              type="date"
              name="depart"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="rounded-xl"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Return</span>
            <Input
              type="date"
              name="return"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={tripType === "oneway"}
              className="rounded-xl disabled:opacity-50"
            />
          </label>
          <label className="block space-y-1.5 sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Adults</span>
            <Input
              type="number"
              name="adults"
              min={1}
              max={9}
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="max-w-[120px] rounded-xl"
            />
          </label>
        </div>

        {hint && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">{hint}</p>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button type="submit" className="rounded-xl shadow-sm">
            {hasSearchBase ? "Search flights" : "Try search (configure URL)"}
          </Button>
          <Button type="button" variant="outline" className="rounded-xl shadow-sm" asChild>
            <a href={TRIPJACK_PORTAL_URL} target="_blank" rel="noreferrer">
              Open Tripjack portal
            </a>
          </Button>
        </div>
      </form>
    </div>
  );
}
