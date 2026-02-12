export interface Ride {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicleType: "car" | "scooty";
  seats: number;
  price: number;
  phone: string;
}
