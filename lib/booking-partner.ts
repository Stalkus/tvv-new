/**
 * Tripjack is the B2B inventory partner. Set env vars when your white-label or
 * deep-link search URLs are available from Tripjack.
 *
 * - NEXT_PUBLIC_TRIPJACK_PORTAL_URL — agent login (default: Tripjack home login)
 * - NEXT_PUBLIC_TRIPJACK_FLIGHT_SEARCH_URL — optional base URL for flight search;
 *   the flight form appends query params (origin, destination, depart, return, adults, tripType).
 *   Rename keys in FlightSearchForm if Tripjack expects different names.
 */

export const TRIPJACK_PORTAL_URL =
  process.env.NEXT_PUBLIC_TRIPJACK_PORTAL_URL?.replace(/\/$/, "") ??
  "https://www.tripjack.com/home/login";

export function getFlightSearchBaseUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_TRIPJACK_FLIGHT_SEARCH_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

export function buildFlightSearchUrl(params: {
  origin: string;
  destination: string;
  depart: string;
  returnDate: string;
  adults: string;
  tripType: "oneway" | "roundtrip";
}): string | null {
  const base = getFlightSearchBaseUrl();
  if (!base) return null;
  const url = new URL(base.startsWith("http") ? base : `https://${base}`);
  const { origin, destination, depart, returnDate, adults, tripType } = params;
  if (origin) url.searchParams.set("origin", origin.trim().toUpperCase());
  if (destination) url.searchParams.set("destination", destination.trim().toUpperCase());
  if (depart) url.searchParams.set("depart", depart);
  if (tripType === "roundtrip" && returnDate) url.searchParams.set("return", returnDate);
  url.searchParams.set("tripType", tripType);
  if (adults) url.searchParams.set("adults", adults);
  return url.toString();
}
