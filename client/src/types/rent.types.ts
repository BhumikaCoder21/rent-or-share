export interface ScootyRent {
  _id: string;

  ownerId: string;

  ownerName: string;
  contact: string;

  vehicleNumber: string;

  location: string;

  pricePerHour: number;

  startDate: string;
  endDate: string;

  availableFrom: string;
  availableTill: string;

  helmetIncluded: boolean;
  fuelIncluded: boolean;

  notes?: string;

  createdAt?: string;
  updatedAt?: string;
}
