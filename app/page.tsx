import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import EmailSignup from "@/components/email-signup";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";
import UpcomingEvents from "@/components/upcoming-events";
import FeatureSection from "@/components/feature-section";
import ContentSectionImage from "@/components/content-section-image";
import ContentSectionQuote from "@/components/content-section-quote";
import Footer from "@/components/footer";
import FeaturesWithSquareImages from "@/components/features-with-square-images";
import WhyBuddhismWorks from "@/components/why-buddhism-works";
import Hero2 from "@/components/hero2";
import NewToMeditation from "@/components/new-to-meditation";
import Header2 from "@/components/header2";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <Header2 />
      <main className="flex-1">
        {/* <Hero /> */}
        <Hero2 />
        {/* <Features /> */}
        {/* <FeaturesWithSquareImages /> */}
        <WhyBuddhismWorks />
        <NewToMeditation />
        {/* <EmailSignup /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <FAQ />
        <ContentSectionQuote />
        {/* <Cta /> */}
        <UpcomingEvents />
        <FeatureSection />
        <ContentSectionImage />
      </main>
      <Footer />
    </div>
  );
}
