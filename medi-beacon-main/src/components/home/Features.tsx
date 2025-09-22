import { 
  Users, 
  Calendar, 
  Stethoscope, 
  Pill, 
  FileText, 
  Bell, 
  Shield, 
  BarChart3,
  Clock,
  Heart,
  Database,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient profiles with medical history, allergies, and vital signs tracking.",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Streamlined booking system with automated reminders and calendar integration.",
    color: "text-success"
  },
  {
    icon: Stethoscope,
    title: "Doctor Directory",
    description: "Comprehensive doctor profiles with specialties, ratings, and availability status.",
    color: "text-warning"
  },
  {
    icon: Pill,
    title: "Prescription Management",
    description: "Digital prescriptions with medication reminders and adherence tracking.",
    color: "text-destructive"
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Secure, digitized medical records with easy access and sharing capabilities.",
    color: "text-primary"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated reminders for medications, appointments, and follow-ups via SMS/Email.",
    color: "text-success"
  }
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "End-to-end encryption and security measures to protect patient data."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive insights and reporting tools for better decision making."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Access your dashboard anywhere, anytime with our mobile-optimized interface."
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Secure cloud-based storage with automatic backups and disaster recovery."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-primary block">Modern Healthcare Management</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive platform provides all the tools healthcare providers need to deliver exceptional patient care efficiently.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Intuitive Dashboard
              <span className="text-primary block">Built for Healthcare</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our dashboard is designed specifically for healthcare workflows, providing quick access to patient information, appointment schedules, and critical alerts in one centralized location.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-destructive" />
                <span className="text-foreground">Real-time patient vitals monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-foreground">Quick appointment scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-warning" />
                <span className="text-foreground">Automated medication reminders</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={dashboardPreview}
              alt="MediCare Dashboard Interface"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card/30 backdrop-blur border border-border/50">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}