import { useState } from "react";
import { ArrowRight, Play, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/medical-hero.jpg";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              HIPAA Compliant & Secure
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your
              <span className="text-primary block">Healthcare Practice</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Streamline patient management, appointments, prescriptions, and medical records with our comprehensive healthcare dashboard solution.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">250K+</div>
              <div className="text-sm text-muted-foreground">Patients Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-lg px-8 py-6"
              onClick={() => setIsOpen(true)}
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              Trusted by 500+ Clinics
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src={heroImage}
              alt="Healthcare professionals using MediCare dashboard"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
        </div>
      </div>

      {/* 🔽 Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-3xl">
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-xl shadow-lg"
            >
              <source src="/medi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
