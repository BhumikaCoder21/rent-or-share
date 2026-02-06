"use client";

import { useState } from "react";
import ActionCard from "./ActionCard";
import ShareRideForm from "./ShareRideForm";
import ScootyRentForm from "./ScootyRentForm";

export default function ActionCards() {
  const [isRideFormOpen, setIsRideFormOpen] = useState(false);
  const [isScootyFormOpen, setIsScootyFormOpen] = useState(false);

  return (
    <>
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActionCard
            title="Share a Ride"
            description="Going somewhere? Share your ride with college friends."
            buttonText="Post a Ride"
            type="ride"
            onClick={() => setIsRideFormOpen(true)}
          />

          <ActionCard
            title="Give Scooty on Rent"
            description="Not using your scooty? Rent it out to nearby students and earn."
            buttonText="List Scooty"
            type="scooty"
            onClick={() => setIsScootyFormOpen(true)}
          />
        </div>
      </section>

      {isRideFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsRideFormOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
            <ShareRideForm onClose={() => setIsRideFormOpen(false)} />
          </div>
        </div>
      )}

      {isScootyFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsScootyFormOpen(false)}
          />

          <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
            <ScootyRentForm onClose={() => setIsScootyFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
