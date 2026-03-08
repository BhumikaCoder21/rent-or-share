export interface Availability {
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
}

export interface Vehicle {
  _id: string;
  vehicleNumber: string;
  type: string;
  brand?: string;
  model?: string;
}

export interface ScootyRent {
  _id: string;

  owner: string;

  ownerName: string;
  contact: string;

  vehicle: Vehicle;

  pickupLocation: string;

  pricePerHour: number;

  availability: Availability;

  helmetIncluded: boolean;
  fuelIncluded: boolean;

  notes?: string;

  createdAt?: string;
  updatedAt?: string;
}
