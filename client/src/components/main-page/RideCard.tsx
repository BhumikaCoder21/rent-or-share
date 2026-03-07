"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Bike,
  IndianRupee,
  Users,
  Phone,
  MessageCircle,
} from "lucide-react";

import { Ride } from "@/types/ride.types";
import { useRides } from "@/hooks/useRides";

interface RideCardProps {
  ride: Ride;
}

export default function RideCard({ ride }: RideCardProps) {
  const [showContact, setShowContact] = useState(false);
  const { removeRide } = useRides();

  const formattedDate = new Date(ride.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in joining your ride from ${ride.from} to ${ride.to} on ${formattedDate} at ${ride.time}.`,
  );


const currentUserId =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "{}")._id
    : null;

  const isOwner = ride.user === currentUserId;
  console.log("ride.user:", ride.user);
  console.log("currentUserId:", currentUserId);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this ride?")) return;

    try {
      await removeRide(ride._id);
    } catch (error) {
      console.error("Error deleting ride:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4">
      
      <div className="flex items-start gap-3">
        <MapPin className="text-[#00AFF5] mt-1" />
        <div>
          <p className="font-semibold text-lg">{ride.from}</p>
          <p className="text-gray-500 text-sm">to {ride.to}</p>
        </div>
      </div>

      
      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{ride.time}</span>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700">
          {ride.vehicleType === "car" ? (
            <Car className="w-5 h-5 text-[#00AFF5]" />
          ) : (
            <Bike className="w-5 h-5 text-[#00AFF5]" />
          )}
          <span className="capitalize font-medium">{ride.vehicleType}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-5 h-5" />
          <span>
            {ride.seats} seat{ride.seats > 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex items-center gap-1 font-bold text-[#00AFF5]">
          <IndianRupee className="w-4 h-4" />
          {ride.price}
        </div>
      </div>

     
      {isOwner ? (
        <div className="flex gap-3 mt-2">
          <Link href={`/edit-ride/${ride._id}`} className="flex-1">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-xl">
              Update Ride
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl"
          >
            Delete Ride
          </button>
        </div>
      ) : (
        <>
          {!showContact && (
            <button
              onClick={() => setShowContact(true)}
              className="mt-2 w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-semibold py-2 rounded-xl"
            >
              Join Ride
            </button>
          )}

          {showContact && (
            <div className="mt-3 bg-gray-50 rounded-xl p-4 space-y-3">
              <p className="text-sm text-gray-600">Contact Rider</p>

              <p className="font-semibold text-lg">{ride.phone}</p>

              <div className="flex gap-3">
                <Link
                  href={`tel:${ride.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Link>

                <Link
                  href={`https://wa.me/91${ride.phone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2 rounded-xl font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
