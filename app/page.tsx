import Hero from "@/components/home/Hero";
import DestinationCategories from "@/components/home/DestinationCategories";
import HomePackageSection from "@/components/home/HomePackageSection";
import AwardBanner from "@/components/home/AwardBanner";
import TrendingDestinations from "@/components/home/TrendingDestinations";
import {
  domesticPackages,
  greatOffersPackages,
  internationalPackages,
  northIndiaPackages,
  southIndiaPackages,
  staffPickedPackages,
} from "@/lib/home-package-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <DestinationCategories />
      <HomePackageSection title="Domestic" href="/packages/domestic" packages={domesticPackages} />
      <HomePackageSection
        title="International"
        href="/packages/international"
        packages={internationalPackages}
        className="bg-zinc-50"
      />
      <HomePackageSection title="North India" href="/packages/north-india" packages={northIndiaPackages} />
      <HomePackageSection
        title="South India"
        href="/packages/south-india"
        packages={southIndiaPackages}
        className="bg-zinc-50"
      />
      <HomePackageSection title="Staff picked" href="/packages" packages={staffPickedPackages} />
      <HomePackageSection
        title="Great offers"
        href="/exclusive"
        packages={greatOffersPackages}
        className="bg-zinc-50"
      />
      <AwardBanner />
      <TrendingDestinations />
    </div>
  );
}
