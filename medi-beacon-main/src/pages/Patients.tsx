import { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, Phone, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const patients = [
  {
    id: 1,
    name: "John Smith",
    age: 34,
    gender: "Male",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com",
    lastVisit: "2024-01-15",
    condition: "Hypertension",
    status: "active",
    bloodGroup: "A+"
  },
  {
    id: 2,
    name: "Emily Johnson",
    age: 28,
    gender: "Female",
    phone: "+1 (555) 987-6543",
    email: "emily.j@email.com",
    lastVisit: "2024-01-12",
    condition: "Diabetes Type 2",
    status: "active",
    bloodGroup: "O-"
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 456-7890",
    email: "m.brown@email.com",
    lastVisit: "2024-01-10",
    condition: "Asthma",
    status: "inactive",
    bloodGroup: "B+"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    age: 52,
    gender: "Female",
    phone: "+1 (555) 321-0987",
    email: "sarah.w@email.com",
    lastVisit: "2024-01-18",
    condition: "Arthritis",
    status: "active",
    bloodGroup: "AB+"
  },
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground">
            Manage patient records and information
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Patient
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients by name or condition..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{patient.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {patient.age} years • {patient.gender}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>Book Appointment</DropdownMenuItem>
                    <DropdownMenuItem>Medical History</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{patient.email}</span>
                </div>
              </div>

              {/* Medical Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Condition:</span>
                  <Badge variant="outline">{patient.condition}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Blood Group:</span>
                  <Badge variant="secondary">{patient.bloodGroup}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge 
                    variant={patient.status === "active" ? "default" : "secondary"}
                  >
                    {patient.status}
                  </Badge>
                </div>
              </div>

              {/* Last Visit */}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPatients.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No patients found</h3>
              <p className="text-sm">
                {searchTerm 
                  ? "Try adjusting your search terms" 
                  : "Start by adding your first patient"
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}