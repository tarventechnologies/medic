import { 
  Users, 
  Calendar, 
  Stethoscope, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentAppointments = [
  {
    id: 1,
    patient: "John Smith",
    doctor: "Dr. Sarah Wilson",
    time: "09:00 AM",
    status: "confirmed",
    type: "Consultation"
  },
  {
    id: 2,
    patient: "Emily Johnson",
    doctor: "Dr. Michael Brown",
    time: "10:30 AM",
    status: "pending",
    type: "Follow-up"
  },
  {
    id: 3,
    patient: "Robert Davis",
    doctor: "Dr. Lisa Chen",
    time: "02:00 PM",
    status: "confirmed",
    type: "Check-up"
  },
];

const upcomingMedications = [
  {
    patient: "John Smith",
    medication: "Amoxicillin 500mg",
    time: "2:00 PM",
    status: "pending"
  },
  {
    patient: "Mary Wilson",
    medication: "Metformin 850mg",
    time: "3:30 PM",
    status: "taken"
  },
  {
    patient: "David Brown",
    medication: "Lisinopril 10mg",
    time: "4:00 PM",
    status: "pending"
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening at your clinic today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value="1,284"
          description="from last month"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          variant="default"
        />
        <StatCard
          title="Today's Appointments"
          value="24"
          description="3 pending confirmations"
          icon={Calendar}
          variant="success"
        />
        <StatCard
          title="Available Doctors"
          value="8"
          description="out of 12 total"
          icon={Stethoscope}
          variant="warning"
        />
        <StatCard
          title="Pending Prescriptions"
          value="15"
          description="need review"
          icon={Clock}
          trend={{ value: -5, isPositive: false }}
          variant="destructive"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Appointments
            </CardTitle>
            <CardDescription>
              Upcoming appointments for today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {appointment.patient}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    with {appointment.doctor} • {appointment.type}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">
                    {appointment.time}
                  </span>
                  <Badge
                    variant={
                      appointment.status === "confirmed" ? "default" : "secondary"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        {/* Medication Reminders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Medication Reminders
            </CardTitle>
            <CardDescription>
              Upcoming medication schedules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMedications.map((med, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {med.patient}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {med.medication}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">
                    {med.time}
                  </span>
                  {med.status === "taken" ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-warning" />
                  )}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Manage All Reminders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Frequently used actions for faster workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col gap-2" variant="outline">
              <Users className="h-6 w-6" />
              Add Patient
            </Button>
            <Button className="h-20 flex flex-col gap-2" variant="outline">
              <Calendar className="h-6 w-6" />
              Book Appointment
            </Button>
            <Button className="h-20 flex flex-col gap-2" variant="outline">
              <Stethoscope className="h-6 w-6" />
              Find Doctor
            </Button>
            <Button className="h-20 flex flex-col gap-2" variant="outline">
              <TrendingUp className="h-6 w-6" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}