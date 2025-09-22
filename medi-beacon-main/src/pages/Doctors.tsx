import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Phone } from "lucide-react";
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

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "12 years",
    hospital: "City Medical Center",
    location: "Downtown",
    phone: "+1 (555) 123-4567",
    availability: "Available",
    consultationFee: "$150",
    qualifications: "MD, FACC"
  },
  {
    id: 2,
    name: "Dr. Michael Brown",
    specialty: "Neurologist",
    rating: 4.9,
    experience: "15 years",
    hospital: "General Hospital",
    location: "Midtown",
    phone: "+1 (555) 987-6543",
    availability: "Busy",
    consultationFee: "$200",
    qualifications: "MD, PhD"
  },
  {
    id: 3,
    name: "Dr. Lisa Chen",
    specialty: "Pediatrician",
    rating: 4.7,
    experience: "8 years",
    hospital: "Children's Hospital",
    location: "West Side",
    phone: "+1 (555) 456-7890",
    availability: "Available",
    consultationFee: "$120",
    qualifications: "MD, FAAP"
  },
  {
    id: 4,
    name: "Dr. Robert Davis",
    specialty: "Orthopedist",
    rating: 4.6,
    experience: "20 years",
    hospital: "Sports Medicine Clinic",
    location: "North End",
    phone: "+1 (555) 321-0987",
    availability: "Available",
    consultationFee: "$180",
    qualifications: "MD, FAAOS"
  },
];

const specialties = [
  "All Specialties",
  "Cardiologist", 
  "Neurologist", 
  "Pediatrician", 
  "Orthopedist",
  "Dermatologist",
  "Psychiatrist"
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" || 
                            doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Doctors</h1>
        <p className="text-muted-foreground">
          Find and connect with healthcare professionals
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search doctors by name or specialty..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                    {doctor.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {doctor.specialty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">
                      • {doctor.experience}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Hospital & Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{doctor.hospital}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className={`font-medium ${
                    doctor.availability === "Available" ? "text-success" : "text-warning"
                  }`}>
                    {doctor.availability}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{doctor.phone}</span>
                </div>
              </div>

              {/* Professional Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Qualifications:</span>
                  <span className="text-sm text-muted-foreground">
                    {doctor.qualifications}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Consultation Fee:</span>
                  <span className="text-sm font-semibold text-primary">
                    {doctor.consultationFee}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                >
                  View Profile
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1"
                  disabled={doctor.availability === "Busy"}
                >
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredDoctors.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No doctors found</h3>
              <p className="text-sm">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}