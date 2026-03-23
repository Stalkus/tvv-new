"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

function GlobeWithFlights({ className }: { className?: string }) {
  const pins = [
    { cx: 168, cy: 168 },
    { cx: 242, cy: 124 },
    { cx: 400, cy: 98 },
    { cx: 520, cy: 142 },
    { cx: 612, cy: 188 },
    { cx: 338, cy: 248 },
    { cx: 458, cy: 268 },
    { cx: 548, cy: 302 },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroGlobeWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.14)" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.06)" />
        </linearGradient>
      </defs>

      <ellipse cx="400" cy="210" rx="300" ry="168" fill="url(#heroGlobeWash)" />

      <g className="text-primary" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none">
        <path
          strokeOpacity={0.22}
          d="M 140 260 Q 220 200 280 220 Q 340 240 400 200 Q 480 150 560 180 Q 640 210 680 160"
        />
        <path
          strokeOpacity={0.18}
          d="M 200 120 Q 280 180 360 160 Q 440 140 520 200 Q 580 240 640 200"
        />
        <path strokeOpacity={0.2} d="M 260 300 Q 400 220 540 280 Q 620 320 700 260" />
        <path
          strokeOpacity={0.16}
          d="M 480 100 Q 420 200 380 280 Q 340 340 280 320"
        />
      </g>

      {pins.map((p, i) => (
        <g key={i} className="text-primary" transform={`translate(${p.cx} ${p.cy})`}>
          <path
            d="M0 -10 C -6 -10 -10 -4 -10 2 C -10 10 0 18 0 18 C0 18 10 10 10 2 C10 -4 6 -10 0 -10Z"
            fill="currentColor"
            fillOpacity={0.35}
            stroke="currentColor"
            strokeOpacity={0.45}
            strokeWidth={0.6}
          />
        </g>
      ))}

      <g className="text-primary">
        <path
          id="heroFlightPathA"
          d="M 118 292 C 220 120 520 80 698 214"
          stroke="currentColor"
          strokeOpacity={0.4}
          strokeWidth={1.4}
          strokeDasharray="6 12"
          fill="none"
        />
        <g>
          <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
            <mpath href="#heroFlightPathA" />
          </animateMotion>
          <path
            d="M0 -1 L14 0 L0 1 L4 0 Z"
            fill="currentColor"
            fillOpacity={0.95}
            transform="translate(-7, 0) scale(1.15)"
          />
        </g>
      </g>

      <g className="text-primary">
        <path
          id="heroFlightPathB"
          d="M 702 118 C 520 200 360 240 132 268"
          stroke="currentColor"
          strokeOpacity={0.38}
          strokeWidth={1.4}
          strokeDasharray="6 12"
          fill="none"
        />
        <g>
          <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" begin="-6s">
            <mpath href="#heroFlightPathB" />
          </animateMotion>
          <path
            d="M0 -1 L14 0 L0 1 L4 0 Z"
            fill="currentColor"
            fillOpacity={0.95}
            transform="translate(-7, 0) scale(1.15)"
          />
        </g>
      </g>

      <g className="text-primary">
        <path
          id="heroFlightPathC"
          d="M 400 340 Q 520 200 640 140"
          stroke="currentColor"
          strokeOpacity={0.36}
          strokeWidth={1.4}
          strokeDasharray="6 12"
          fill="none"
        />
        <g>
          <animateMotion dur="11s" repeatCount="indefinite" rotate="auto" begin="-3s">
            <mpath href="#heroFlightPathC" />
          </animateMotion>
          <path
            d="M0 -1 L14 0 L0 1 L4 0 Z"
            fill="currentColor"
            fillOpacity={0.95}
            transform="translate(-7, 0) scale(1.15)"
          />
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
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: motionDelay }}
      className={className}
    >
      <Link
        href={card.href}
        className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-white/95 p-3 pr-4 shadow-md shadow-black/[0.04] ring-1 ring-black/[0.03] backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
          <Image src={card.image} alt={card.imageAlt} fill className="object-cover" sizes="56px" />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</p>
          <p className="text-sm font-medium leading-snug text-foreground md:text-[15px]">
            {card.titleBefore}{" "}
            <span className="font-bold text-primary">{card.titleBold}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.07] via-white to-white pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,hsl(var(--primary)/0.12),transparent_65%)]" />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">Global travel, one place</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Plan anywhere on the map—<span className="text-primary">flights, stays &amp; packages</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Inventory and booking flows are powered by our B2B partner Tripjack—built for travellers worldwide.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-5xl md:mt-14">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90 md:opacity-100">
            <GlobeWithFlights className="h-[min(420px,78vw)] w-full max-w-[800px] text-primary" />
          </div>

          <div className="relative z-[2] flex flex-col gap-3 md:hidden">
            {serviceCards.map((card, i) => (
              <ServiceCard key={card.href} card={card} motionDelay={0.05 * i} />
            ))}
          </div>

          <div className="relative hidden min-h-[400px] grid-cols-3 grid-rows-2 gap-5 px-2 md:grid">
            <ServiceCard card={serviceCards[0]} className="col-start-1 row-start-1 justify-self-start" motionDelay={0.08} />
            <ServiceCard card={serviceCards[1]} className="col-start-3 row-start-1 justify-self-end" motionDelay={0.12} />
            <div className="col-start-2 row-span-2 min-h-[200px]" aria-hidden />
            <ServiceCard card={serviceCards[2]} className="col-start-1 row-start-2 justify-self-start self-end" motionDelay={0.16} />
            <ServiceCard card={serviceCards[3]} className="col-start-3 row-start-2 justify-self-end self-end" motionDelay={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
