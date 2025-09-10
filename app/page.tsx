import CompaniesSection from "./_sections/companies";
import FeaturesSection from "./_sections/freatures";
import HeroSection from "./_sections/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
    </main>
  );
}
