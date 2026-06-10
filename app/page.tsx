import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AISolutionsSection } from "@/components/ai-solutions-section";
import { AutomationsSection } from "@/components/automations-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <AISolutionsSection />
        <AutomationsSection />
        {/* <ProjectsSection /> */}
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
