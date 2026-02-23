"use client";

import { useState } from "react";
import RidesTable from "@/components/admin/RidesTable";

export default function RidesPage() {
  const [rides, setRides] = useState([
    {
      _id: "1",
      from: "Campus",
      to: "Itanagar",
      fare: 200,
      date: "2026-02-20",
      postedBy: "Rahul Sharma",
    },
    {
      _id: "2",
      from: "Nirjuli",
      to: "Naharlagun",
      fare: 150,
      date: "2026-02-21",
      postedBy: "Anjali Verma",
    },
  ]);

  const handleDelete = (id: string) => {
    setRides((prev) => prev.filter((ride) => ride._id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Rides</h1>
      <RidesTable rides={rides} onDelete={handleDelete} />
    </div>
  );
}
