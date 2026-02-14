export interface ScootyRent {
  ownerName: string;
  contact: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
  availableFrom: string;
  availableTill: string;
  pricePerHour: number;
  helmetIncluded: boolean;
  fuelIncluded: boolean;
  notes?: string;
}

export const scootyRentData: ScootyRent[] = [
  {
    ownerName: "Amit Sharma",
    contact: "8368452516",
    location: "Main Gate, ABC College",
    startDate: "2026-02-13",
    endDate: "2026-02-25",
    pricePerHour: 80,
    availableFrom: "09:00 AM",
    availableTill: "06:00 PM",
    helmetIncluded: true,
    fuelIncluded: false,
    notes: "Valid college ID required",
  },
];
