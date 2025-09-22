import { Navigation } from "@/components/home/Navigation";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Benefits } from "@/components/home/Benefits";
import { CTA } from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="features">
          <Features />
        </div>
        
        <div id="benefits">
          <Benefits />
        </div>
        
        <div id="pricing">
          <CTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}