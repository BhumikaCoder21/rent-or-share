"use client";

import { useState } from "react";
import RentalsTable from "@/components/admin/RentalsTable";

export default function RentalsPage() {
  const [rentals, setRentals] = useState([
    {
      _id: "1",
      title: "Honda Activa",
      location: "Campus",
      price: 400,
      owner: "Rahul Sharma",
    },
    {
      _id: "2",
      title: "Yamaha FZ",
      location: "Nirjuli",
      price: 600,
      owner: "Anjali Verma",
    },
  ]);

  const handleDelete = (id: string) => {
    setRentals((prev) => prev.filter((rental) => rental._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Rentals</h1>
      <RentalsTable rentals={rentals} onDelete={handleDelete} />
    </div>
  );
}
