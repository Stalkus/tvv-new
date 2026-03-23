"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MegaMenuPanel from "@/components/layout/MegaMenuPanel";
import { domesticMegaColumns, internationalMegaColumns } from "@/lib/nav-mega-data";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const flatNavClass = cn(
  navigationMenuTriggerStyle(),
  "inline-flex h-10 items-center bg-transparent px-3 text-foreground/85 no-underline hover:bg-transparent hover:text-primary"
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-90"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-sm font-black tracking-tighter text-primary shadow-sm"
            aria-hidden
          >
            VV
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[11px] italic text-muted-foreground">The</span>
            <span className="text-base font-bold tracking-tight text-foreground md:text-lg">
              <span className="lowercase">vacation </span>
              <span className="text-primary lowercase">voice</span>
            </span>
          </span>
          <span className="flex flex-col leading-tight sm:hidden">
            <span className="text-sm font-bold tracking-tight text-primary">TVV</span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center">
          {/* Desktop mega nav */}
          <NavigationMenu className="hidden max-w-none lg:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Domestic</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuPanel columns={domesticMegaColumns} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>International</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenuPanel columns={internationalMegaColumns} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/exclusive" className={flatNavClass}>
                  Exclusive
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/hot-deals" className={flatNavClass}>
                  Hot deals
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

          {/* Mobile: hub links (full mega on lg+) */}
          <nav
            aria-label="Primary mobile"
            className="flex w-full min-w-0 justify-center gap-1 overflow-x-auto px-1 lg:hidden"
          >
            <Link
              href="/packages/domestic"
              className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-semibold text-foreground/85 transition-colors hover:text-primary"
            >
              Domestic
            </Link>
            <Link
              href="/packages/international"
              className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-semibold text-foreground/85 transition-colors hover:text-primary"
            >
              International
            </Link>
            <Link
              href="/exclusive"
              className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-semibold text-foreground/85 transition-colors hover:text-primary"
            >
              Exclusive
            </Link>
            <Link
              href="/hot-deals"
              className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-semibold text-foreground/85 transition-colors hover:text-primary"
            >
              Deals
            </Link>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-lg border-border bg-white shadow-sm transition-all duration-200 hover:bg-zinc-50"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="hidden h-10 gap-2 rounded-lg border-border bg-white px-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-zinc-50 sm:inline-flex"
              >
                <span className="text-base leading-none" aria-hidden>
                  🇮🇳
                </span>
                <span>INR ₹</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇮🇳</span> INR ₹
              </DropdownMenuItem>
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇺🇸</span> USD $
              </DropdownMenuItem>
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇪🇺</span> EUR €
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="px-2 text-sm font-semibold shadow-none sm:px-3" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
