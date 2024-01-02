import Articles from "./components/Articles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/PageFooter";
import PricingPlan from "./components/PricingPlan";
import Programs from "./components/Programs";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <Programs />
      <PricingPlan />
      <Articles />
      <Footer />
    </>
  );
}
