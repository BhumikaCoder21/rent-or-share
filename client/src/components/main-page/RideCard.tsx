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

import { RideCard as RideCardType } from "./card-data";

interface RideCardProps {
  ride: RideCardType;
}

export default function RideCard({ ride }: RideCardProps) {
  const [showContact, setShowContact] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in joining your ride from ${ride.from} to ${ride.to} on ${ride.date} at ${ride.time}.`,
  );

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
          <span>{ride.date}</span>
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
    </div>
  );
}
