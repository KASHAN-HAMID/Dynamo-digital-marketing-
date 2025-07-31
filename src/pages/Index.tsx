import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ReviewsSection } from "@/components/ReviewsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { BackgroundAnimation } from "@/components/BackgroundAnimation"

const Index = () => {
  React.useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Animations */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
