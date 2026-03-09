export interface Ride {
  _id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicleType: "car" | "scooty";
  seats: number;
  price: number;
  phone: string;
  user: string;
}
