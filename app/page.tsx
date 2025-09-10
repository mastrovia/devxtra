import CalloutSection from "./_sections/callout";
import CompaniesSection from "./_sections/companies";
import FeaturesBigImageSection from "./_sections/features-big-image";
import FeaturesGridSection from "./_sections/features-grid";
import FeaturesListSection from "./_sections/features-list";
import HeroSection from "./_sections/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <HeroSection />
      <CompaniesSection />
      <FeaturesListSection />
      <FeaturesGridSection />
      <CalloutSection />
      <FeaturesBigImageSection />
      <div className="h-[100vh]" />
    </main>
  );
}
