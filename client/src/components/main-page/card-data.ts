export type RideCard = {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicleType: "car" | "scooty";
  seats: number;
  price: number;
  phone: string; 
};

export const rideCards: RideCard[] = [
  {
    id: "1",
    from: "NIT Arunachal Pradesh",
    to: "Itanagar Market",
    date: "Mon, 12 Feb",
    time: "09:00 AM",
    vehicleType: "scooty",
    seats: 2,
    price: 50,
    phone: "9876543210",
  },
  {
    id: "2",
    from: "Naharlagun",
    to: "NIT Arunachal Pradesh",
    date: "Tue, 13 Feb",
    time: "05:30 PM",
    vehicleType: "car",
    seats: 3,
    price: 80,
    phone: "9123456789",
  },
  {
    id: "3",
    from: "Guwahati",
    to: "NIT Arunachal Pradesh",
    date: "Tue, 18 Feb",
    time: "05:30 PM",
    vehicleType: "scooty",
    seats: 3,
    price: 80,
    phone: "9123456789",
  },
];
