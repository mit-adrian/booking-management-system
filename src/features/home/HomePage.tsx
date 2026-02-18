import CTASection from "./components/CTASection";
import FleetPreviewSection from "./components/FleetPreviewSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FleetPreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
