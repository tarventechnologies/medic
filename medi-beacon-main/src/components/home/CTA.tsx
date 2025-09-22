import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const includedFeatures = [
  "Complete patient management system",
  "Unlimited appointments scheduling",
  "Prescription & medication tracking", 
  "24/7 priority customer support",
  "HIPAA compliant security",
  "Mobile app access",
  "Advanced analytics & reporting",
  "Integration with existing systems"
];

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Transform
                <span className="block">Your Practice?</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join over 10,000 healthcare providers who trust MediCare to manage their patient care efficiently and securely.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">₹500</span>
                <span className="text-white/70">per month</span>
              </div>
              <p className="text-white/90 text-sm">
                30-day free trial • No setup fees • Cancel anytime
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/90">+91 800-438-4380</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/80" />
                <span className="text-white/90">medicare@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Sign Up Form */}
          <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Start Your Free Trial
                  </h3>
                  <p className="text-muted-foreground">
                    No credit card required • Full access for 30 days
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="h-12"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="h-12"
                    />
                  </div>
                  
                  <Input 
                    type="email" 
                    placeholder="Work Email Address" 
                    className="h-12"
                  />
                  
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="h-12"
                  />
                  
                  <Input 
                    placeholder="Healthcare Facility Name" 
                    className="h-12"
                  />
                  
                  <Button size="lg" className="w-full h-12 text-lg gap-2">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>

                <div className="text-center text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground text-center">
                    <div className="font-semibold">HIPAA</div>
                    <div>Compliant</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    <div className="font-semibold">SOC 2</div>
                    <div>Certified</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    <div className="font-semibold">99.9%</div>
                    <div>Uptime SLA</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}