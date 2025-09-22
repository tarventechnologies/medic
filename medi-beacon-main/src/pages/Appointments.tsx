import { useState } from "react";
import { Search, Filter, Plus, Calendar as CalendarIcon, Clock, User, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const appointments = [
  {
    id: 1,
    patient: "John Smith",
    doctor: "Dr. Sarah Wilson",
    date: "2024-01-22",
    time: "09:00 AM",
    duration: "30 min",
    type: "Consultation",
    status: "confirmed",
    reason: "Regular checkup"
  },
  {
    id: 2,
    patient: "Emily Johnson",
    doctor: "Dr. Michael Brown",
    date: "2024-01-22",
    time: "10:30 AM",
    duration: "45 min",
    type: "Follow-up",
    status: "pending",
    reason: "Post-surgery review"
  },
  {
    id: 3,
    patient: "Robert Davis",
    doctor: "Dr. Lisa Chen",
    date: "2024-01-23",
    time: "02:00 PM",
    duration: "30 min",
    type: "Consultation",
    status: "confirmed",
    reason: "Fever and cough"
  },
  {
    id: 4,
    patient: "Mary Wilson",
    doctor: "Dr. Robert Davis",
    date: "2024-01-24",
    time: "11:00 AM",
    duration: "60 min",
    type: "Surgery",
    status: "confirmed",
    reason: "Knee replacement"
  },
];

const statusOptions = ["All Status", "confirmed", "pending", "cancelled", "completed"];

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All Status" || 
                         appointment.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed": return "default";
      case "pending": return "secondary";
      case "cancelled": return "destructive";
      case "completed": return "outline";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "cancelled": return <X className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">
            Manage patient appointments and schedules
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Book Appointment
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments by patient, doctor, or type..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Date & Time */}
                  <div className="text-center min-w-20">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(appointment.date).getDate()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(appointment.date).toLocaleDateString('en', { month: 'short' })}
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold text-foreground">
                        {appointment.patient}
                      </span>
                      <Badge variant="outline">
                        {appointment.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {appointment.time} ({appointment.duration})
                      </div>
                      <div>
                        with {appointment.doctor}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-1">
                      Reason: {appointment.reason}
                    </p>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-4">
                  <Badge 
                    variant={getStatusVariant(appointment.status)}
                    className="gap-1"
                  >
                    {getStatusIcon(appointment.status)}
                    {appointment.status}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    {appointment.status === "pending" && (
                      <Button size="sm">
                        Confirm
                      </Button>
                    )}
                    {appointment.status === "confirmed" && (
                      <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No appointments found</h3>
              <p className="text-sm">
                {searchTerm 
                  ? "Try adjusting your search terms" 
                  : "Schedule your first appointment to get started"
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}