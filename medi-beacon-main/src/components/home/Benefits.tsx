import { CheckCircle, TrendingUp, Users, Clock, DollarSign, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Efficiency by 40%",
    description: "Streamlined workflows reduce administrative tasks and paperwork",
    stats: "40% faster"
  },
  {
    icon: Users,
    title: "Better Patient Outcomes",
    description: "Improved care coordination leads to higher patient satisfaction",
    stats: "95% satisfaction"
  },
  {
    icon: Clock,
    title: "Save 3 Hours Daily",
    description: "Automated processes and digital records eliminate manual work",
    stats: "3+ hours saved"
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description: "Lower administrative overhead and improved resource utilization",
    stats: "30% cost reduction"
  }
];

const testimonials = [
  {
    quote: "MediCare has transformed our practice. We've reduced appointment no-shows by 60% and our staff is more efficient than ever.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    clinic: "Metropolitan Health Center"
  },
  {
    quote: "The prescription management feature alone has saved us countless hours. Patients love the automated reminders.",
    author: "Dr. Michael Chen",
    role: "Family Medicine",
    clinic: "Westside Medical Group"
  },
  {
    quote: "Implementation was seamless, and the ROI was immediate. Our patient satisfaction scores have increased significantly.",
    author: "Dr. Emily Rodriguez",
    role: "Practice Manager",
    clinic: "Community Health Solutions"
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Proven Results for
            <span className="text-primary block">Healthcare Providers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of healthcare providers who have transformed their practice with MediCare.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 bg-gradient-to-b from-card to-muted/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2">{benefit.stats}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Healthcare Professionals
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what healthcare providers are saying about MediCare and how it has improved their practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex items-start gap-2 mb-4">
                    <Award className="h-5 w-5 text-primary mt-1" />
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.clinic}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}