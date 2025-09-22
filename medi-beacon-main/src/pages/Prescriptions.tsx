import { useState } from "react";
import { Search, Filter, Plus, Pill, Clock, User, Calendar } from "lucide-react";
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

const prescriptions = [
  {
    id: 1,
    patient: "John Smith",
    doctor: "Dr. Sarah Wilson",
    date: "2024-01-20",
    medications: [
      { name: "Amoxicillin", dose: "500mg", frequency: "3x daily", duration: "7 days" },
      { name: "Paracetamol", dose: "500mg", frequency: "As needed", duration: "5 days" }
    ],
    status: "active",
    nextDue: "2:00 PM today"
  },
  {
    id: 2,
    patient: "Emily Johnson",
    doctor: "Dr. Michael Brown",
    date: "2024-01-18",
    medications: [
      { name: "Metformin", dose: "850mg", frequency: "2x daily", duration: "30 days" },
      { name: "Glimepiride", dose: "2mg", frequency: "1x daily", duration: "30 days" }
    ],
    status: "active",
    nextDue: "8:00 AM tomorrow"
  },
  {
    id: 3,
    patient: "Robert Davis",
    doctor: "Dr. Lisa Chen",
    date: "2024-01-15",
    medications: [
      { name: "Salbutamol Inhaler", dose: "100mcg", frequency: "As needed", duration: "30 days" }
    ],
    status: "completed",
    nextDue: null
  },
];

export default function Prescriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.medications.some(med => 
                           med.name.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesStatus = selectedStatus === "All Status" || 
                         prescription.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground">
            Manage patient prescriptions and medication schedules
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Prescription
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by patient, doctor, or medication..."
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
            <SelectItem value="All Status">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Prescriptions List */}
      <div className="space-y-4">
        {filteredPrescriptions.map((prescription) => (
          <Card key={prescription.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {prescription.patient.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{prescription.patient}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Prescribed by {prescription.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={prescription.status === "active" ? "default" : "secondary"}>
                    {prescription.status}
                  </Badge>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(prescription.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Medications */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Pill className="h-4 w-4 text-primary" />
                  Medications
                </h4>
                <div className="space-y-3">
                  {prescription.medications.map((med, index) => (
                    <div key={index} className="bg-muted/50 p-3 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-foreground">{med.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {med.dose} • {med.frequency} • {med.duration}
                          </p>
                        </div>
                        {prescription.status === "active" && (
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Due */}
              {prescription.nextDue && (
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-warning" />
                    <span className="text-sm font-medium">Next medication due:</span>
                  </div>
                  <span className="text-sm font-semibold text-warning">
                    {prescription.nextDue}
                  </span>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Edit Prescription
                </Button>
                {prescription.status === "active" && (
                  <>
                    <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                      Mark Taken
                    </Button>
                    <Button size="sm" variant="outline">
                      Set Reminder
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPrescriptions.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <Pill className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No prescriptions found</h3>
              <p className="text-sm">
                {searchTerm 
                  ? "Try adjusting your search terms" 
                  : "Create your first prescription to get started"
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}