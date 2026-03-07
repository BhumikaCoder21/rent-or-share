"use client";

import { useParams } from "next/navigation";
import ShareRideForm from "@/components/landing-page/ShareRideForm";

export default function EditRidePage() {
  const params = useParams();
  const rideId = params.id as string;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Edit Ride</h1>

      <ShareRideForm rideId={rideId} />
    </div>
  );
}
