"use client";

import { useState } from "react";
import ActionCard from "./ActionCard";
import ShareRideForm from "./ShareRideForm"; // Ensure this import path is correct

export default function ActionCards() {
  // State to control the modal
  const [isRideFormOpen, setIsRideFormOpen] = useState(false);

  return (
    <>
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Opens the form */}
          <ActionCard
            title="Share a Ride"
            description="Going somewhere? Share your ride with college friends."
            buttonText="Post a Ride"
            type="ride"
            onClick={() => setIsRideFormOpen(true)}
          />

          {/* Card 2: Placeholder for now */}
          <ActionCard
            title="Rent a Scooty"
            description="Need a ride? Rent a scooty nearby."
            buttonText="Rent Now"
            type="scooty"
            onClick={() => console.log("Open scooty rental logic")}
          />
        </div>
      </section>

      {/* --- MODAL LOGIC --- */}
      {isRideFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop (Dark overlay) */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsRideFormOpen(false)} // Clicking outside closes it
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
            <ShareRideForm onClose={() => setIsRideFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
