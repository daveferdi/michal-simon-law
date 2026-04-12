import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import StatsSection from "@/components/sections/StatsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageLoader from "@/components/ui/PageLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <StatsSection />
        <ArticlesSection />
        <ValueProposition />
        <ServicesGrid />
        <AboutSection />
        <ProcessSteps />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
