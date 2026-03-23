"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BRAND = "#75D1C1";

const serviceCards = [
  {
    href: "/hotels",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400&auto=format&fit=crop",
    imageAlt: "Historic dome architecture",
    label: "Hotels",
    titleBefore: "Book",
    titleBold: "Top Hotels",
  },
  {
    href: "/flights",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400&auto=format&fit=crop",
    imageAlt: "Airplane wing at sunset",
    label: "Flights",
    titleBefore: "Compare",
    titleBold: "Best Flight Options",
  },
  {
    href: "/holiday",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
    imageAlt: "Coastal city at sunset",
    label: "Packages",
    titleBefore: "Choose from",
    titleBold: "Best Holiday Packages",
  },
  {
    href: "/cruises",
    image:
      "https://images.unsplash.com/photo-1548574160-e50f22889e99?q=80&w=400&auto=format&fit=crop",
    imageAlt: "Cruise ship on the ocean",
    label: "Cruises",
    titleBefore: "Explore",
    titleBold: "Cruise Trips",
  },
];

/** Compact viewBox — routes & planes sized to read clearly when scaled ~240–320px tall */
function GlobeWithFlights({ className }: { className?: string }) {
  const pins = [
    { cx: 120, cy: 118 },
    { cx: 188, cy: 82 },
    { cx: 300, cy: 62 },
    { cx: 392, cy: 96 },
    { cx: 468, cy: 132 },
    { cx: 258, cy: 168 },
    { cx: 348, cy: 188 },
    { cx: 418, cy: 208 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 560 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroGlobeWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BRAND} stopOpacity="0.18" />
          <stop offset="100%" stopColor={BRAND} stopOpacity="0.07" />
        </linearGradient>
        <filter id="heroPlaneGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor={BRAND} floodOpacity="0.55" />
        </filter>
      </defs>

      <ellipse cx="280" cy="140" rx="248" ry="118" fill="url(#heroGlobeWash)" />

      <g stroke={BRAND} strokeWidth={1.2} strokeLinecap="round" fill="none" opacity={0.35}>
        <path d="M 88 168 Q 160 120 220 138 Q 280 156 340 118 Q 400 88 472 108" />
        <path d="M 128 72 Q 200 120 280 108 Q 360 96 428 132" />
      </g>

      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.cx} ${p.cy})`}>
          <path
            d="M0 -9 C -5 -9 -9 -4 -9 2 C -9 9 0 16 0 16 C0 16 9 9 9 2 C9 -4 5 -9 0 -9Z"
            fill={BRAND}
            fillOpacity={0.45}
            stroke={BRAND}
            strokeOpacity={0.6}
            strokeWidth={0.5}
          />
        </g>
      ))}

      {/* Route A — thick dashed arc */}
      <path
        id="heroFlightPathA"
        d="M 72 200 C 160 72 400 48 498 168"
        stroke={BRAND}
        strokeOpacity={0.85}
        strokeWidth={2.25}
        strokeDasharray="7 11"
        strokeLinecap="round"
        fill="none"
      />
      <g filter="url(#heroPlaneGlow)">
        <g>
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#heroFlightPathA" />
          </animateMotion>
          <g transform="translate(-14, -10) scale(1.35)">
            <path
              d="M2 10 L22 10 L26 6 L22 2 L2 2 L8 10 Z M22 10 L32 10 L32 14 L22 14 Z"
              fill={BRAND}
              stroke="#0f766e"
              strokeWidth={0.4}
              strokeOpacity={0.35}
            />
          </g>
        </g>
      </g>

      <path
        id="heroFlightPathB"
        d="M 488 72 C 360 120 200 168 72 148"
        stroke={BRAND}
        strokeOpacity={0.8}
        strokeWidth={2.25}
        strokeDasharray="7 11"
        strokeLinecap="round"
        fill="none"
      />
      <g filter="url(#heroPlaneGlow)">
        <g>
          <animateMotion dur="11s" repeatCount="indefinite" rotate="auto" begin="-4s">
            <mpath href="#heroFlightPathB" />
          </animateMotion>
          <g transform="translate(-14, -10) scale(1.35)">
            <path
              d="M2 10 L22 10 L26 6 L22 2 L2 2 L8 10 Z M22 10 L32 10 L32 14 L22 14 Z"
              fill={BRAND}
              stroke="#0f766e"
              strokeWidth={0.4}
              strokeOpacity={0.35}
            />
          </g>
        </g>
      </g>

      <path
        id="heroFlightPathC"
        d="M 280 220 Q 380 120 460 88"
        stroke={BRAND}
        strokeOpacity={0.78}
        strokeWidth={2.25}
        strokeDasharray="7 11"
        strokeLinecap="round"
        fill="none"
      />
      <g filter="url(#heroPlaneGlow)">
        <g>
          <animateMotion dur="7.5s" repeatCount="indefinite" rotate="auto" begin="-2s">
            <mpath href="#heroFlightPathC" />
          </animateMotion>
          <g transform="translate(-14, -10) scale(1.35)">
            <path
              d="M2 10 L22 10 L26 6 L22 2 L2 2 L8 10 Z M22 10 L32 10 L32 14 L22 14 Z"
              fill={BRAND}
              stroke="#0f766e"
              strokeWidth={0.4}
              strokeOpacity={0.35}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function ServiceCard({
  card,
  className,
  motionDelay,
}: {
  card: (typeof serviceCards)[0];
  className?: string;
  motionDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: motionDelay }}
      className={className}
    >
      <Link
        href={card.href}
        className="group flex items-center gap-2.5 rounded-xl border border-border/80 bg-white/95 p-2.5 pr-3 shadow-sm ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
      >
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
          <Image src={card.image} alt={card.imageAlt} fill className="object-cover" sizes="44px" />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</p>
          <p className="text-xs font-medium leading-snug text-foreground sm:text-[13px]">
            {card.titleBefore}{" "}
            <span className="font-bold text-primary">{card.titleBold}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const leftCards = [serviceCards[0], serviceCards[2]];
  const rightCards = [serviceCards[1], serviceCards[3]];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.06] to-white pb-8 pt-6 md:pb-10 md:pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_35%,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="relative z-[1] mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-xl text-center lg:max-w-2xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:text-xs">
            Global travel · Tripjack-powered
          </p>
          <h1 className="mt-1.5 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
            Plan anywhere—<span className="text-primary">flights, stays &amp; packages</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground md:text-[15px]">
            Book hotels, flights, holidays, and cruises with inventory from our B2B partner.
          </p>
        </motion.div>

        {/* Desktop: cards flank the map so flight paths stay visible */}
        <div className="mt-6 hidden items-stretch gap-4 lg:mt-8 lg:flex lg:justify-center">
          <div className="flex w-[min(100%,220px)] flex-shrink-0 flex-col justify-center gap-2.5 xl:w-[240px]">
            <ServiceCard card={leftCards[0]} motionDelay={0.06} />
            <ServiceCard card={leftCards[1]} motionDelay={0.1} />
          </div>

          <div className="relative flex min-h-[220px] w-full max-w-[420px] flex-shrink-0 flex-col items-center justify-center">
            <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-wider text-primary/80">
              Live routes
            </p>
            <div className="relative w-full rounded-2xl border border-primary/15 bg-white/40 p-2 shadow-inner shadow-primary/5 ring-1 ring-primary/10 backdrop-blur-[2px]">
              <GlobeWithFlights className="mx-auto h-[200px] w-full max-w-[400px] text-primary xl:h-[220px]" />
            </div>
          </div>

          <div className="flex w-[min(100%,220px)] flex-shrink-0 flex-col justify-center gap-2.5 xl:w-[240px]">
            <ServiceCard card={rightCards[0]} motionDelay={0.14} />
            <ServiceCard card={rightCards[1]} motionDelay={0.18} />
          </div>
        </div>

        {/* Mobile / tablet: compact map first, then 2×2 cards */}
        <div className="mt-6 lg:hidden">
          <div className="mx-auto max-w-md">
            <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-wider text-primary/80">
              Live routes
            </p>
            <div className="rounded-2xl border border-primary/15 bg-white/50 p-2 shadow-inner ring-1 ring-primary/10">
              <GlobeWithFlights className="mx-auto h-[min(200px,42vw)] w-full" />
            </div>
          </div>
          <div className="mx-auto mt-4 grid max-w-lg grid-cols-2 gap-2.5 sm:gap-3">
            {serviceCards.map((card, i) => (
              <ServiceCard key={card.href} card={card} motionDelay={0.04 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
