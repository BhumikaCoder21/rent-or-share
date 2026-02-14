export interface ScootyRent {
  id: string;
  ownerName: string;
  contact: string;
  location: string;
  startDate: string;
  endDate: string;
  availableFrom: string;
  availableTill: string;
  pricePerHour: number;
  helmetIncluded: boolean;
  fuelIncluded: boolean;
  notes?: string;
}
