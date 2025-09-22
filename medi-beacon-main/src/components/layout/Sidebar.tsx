import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  Calendar, 
  Stethoscope,
  Pill,
  Bell,
  Phone,
  ChevronLeft,
  ChevronRight,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Add Patient", url: "/patients/new", icon: UserPlus },
  { title: "Appointments", url: "/appointments", icon: Calendar },
  { title: "Doctors", url: "/doctors", icon: Stethoscope },
  { title: "Prescriptions", url: "/prescriptions", icon: Pill },
  { title: "Reminders", url: "/reminders", icon: Bell },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/dashboard") return currentPath === "/dashboard";
    return currentPath.startsWith(path);
  };

  return (
    <aside
      className={cn(
        "bg-card border-r border-border h-screen sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold text-foreground">MediCare</h2>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.url}>
              <NavLink
                to={item.url}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors w-full",
                  isActive(item.url)
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0")} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Emergency Contact */}
      <div className="p-4 border-t border-border">
        <Button
          variant="destructive"
          className={cn(
            "w-full",
            collapsed ? "px-2" : "px-4"
          )}
        >
          <Phone className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Emergency</span>}
        </Button>
      </div>
    </aside>
  );
}