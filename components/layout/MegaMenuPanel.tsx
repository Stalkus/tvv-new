import Link from "next/link";
import { TrendingUp } from "lucide-react";
import type { MegaColumn } from "@/lib/nav-mega-data";
import { cn } from "@/lib/utils";

type Props = {
  columns: MegaColumn[];
};

export default function MegaMenuPanel({ columns }: Props) {
  return (
    <div className="grid w-[min(100vw-1.5rem,72rem)] grid-cols-1 gap-8 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {columns.map((col) => (
        <div
          key={col.title}
          className={cn(
            "min-w-0 rounded-xl px-1 py-1",
            col.variant === "highlight" && "bg-amber-50/90 ring-1 ring-amber-100/80"
          )}
        >
          <div className="mb-3 flex items-center gap-2 px-2">
            {col.variant === "highlight" && (
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <TrendingUp className="h-4 w-4" aria-hidden />
              </span>
            )}
            <p className="text-sm font-bold tracking-tight text-foreground">{col.title}</p>
          </div>
          <ul className="flex flex-col gap-1">
            {col.links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-sm text-foreground/80 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
