import CalloutSection from './_sections/callout';
import CalloutAnimatedSection from './_sections/callout-animated';
import TechStacksSection from './_sections/companies';
import FaqsSection from './_sections/faq';
import FeaturesBigImageSection from './_sections/features-big-image';
import FeaturesBigVideoSection from './_sections/features-big-video';
import FeaturesGridSection from './_sections/features-grid';
import FeaturesListSection from './_sections/features-list';
import FeaturesSideBySideSection from './_sections/features-sidebyside';
import HeroSection from './_sections/hero';
// import LiveSuccessDashboard from './_sections/live-success-dashboard';
import FinalCTASection from './_sections/final-cta';
// import Testimonials from './_sections/testimonials';

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <HeroSection id="main" />
      <div className="flex flex-col gap-14 pt-10 bg-background/70 backdrop-blur-xl border-t">
        <TechStacksSection id="tech-stacks" />
        <FeaturesBigVideoSection />
        {/* <LiveSuccessDashboard id="live-success" /> */}
        <FeaturesListSection id="out-promise" />
        <FeaturesGridSection id="what-you-will-learn" />
        <CalloutSection id="join-devxtra-now" />
      </div>
      <FeaturesBigImageSection />
      <FeaturesSideBySideSection id="course-journey" />
      <CalloutAnimatedSection id="join-devxtra-now-2" />
      {/* <Testimonials id="testimonials" /> */}
      <FaqsSection id="faq" />
      <FinalCTASection id="final-cta" />
    </main>
  );
}
