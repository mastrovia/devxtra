import CalloutSection from './_sections/callout';
import CalloutAnimatedSection from './_sections/callout-animated';
import TechStacksSection from './_sections/companies';
import FaqsSection from './_sections/faq';
// import FeaturesBigImageSection from "./_sections/features-big-image";
import FeaturesGridSection from './_sections/features-grid';
import FeaturesListSection from './_sections/features-list';
import FeaturesSideBySideSection from './_sections/features-sidebyside';
import HeroSection from './_sections/hero';
import Testimonials from './_sections/testimonials';

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <HeroSection id="main" />
      <TechStacksSection id="tech-stacks" />
      <FeaturesListSection id="out-promise" />
      <FeaturesGridSection id="what-you-will-learn" />
      <CalloutSection id="join-devxtra-now" />
      {/* <FeaturesBigImageSection /> */}
      <FeaturesSideBySideSection id="course-journey" />
      <CalloutAnimatedSection id="join-devxtra-now-2" />
      <Testimonials id="testimonials" />
      <FaqsSection id="faq" />
    </main>
  );
}
