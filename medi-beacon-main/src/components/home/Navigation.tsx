import { useState } from "react";
import { Menu, X, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
  { name: "Premium", href: "#pricing" },
  // { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo → Clickable to go home */}
        <a href="#home" className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-primary" />
          <div>
            <div className="text-xl font-bold text-foreground">MediCare</div>
            <div className="text-xs text-muted-foreground">Healthcare Dashboard</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button className="gap-2">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-2">
            <Button variant="ghost" className="w-full" asChild>
              <a href="/dashboard">Dashboard</a>
            </Button>
            <Button className="w-full gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
