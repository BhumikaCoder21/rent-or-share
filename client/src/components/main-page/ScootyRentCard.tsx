"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  Bike,
  IndianRupee,
  Phone,
  MessageCircle,
  ShieldCheck,
  Fuel,
} from "lucide-react";
import { ScootyRent } from "./scooty-rent-data";

interface Props {
  data: ScootyRent;
}

export default function ScootyRentCard({ data }: Props) {
  const [showContact, setShowContact] = useState(false);

  const toDate = (d: Date | string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });

  const dateRange =
    data.startDate && data.endDate
      ? `${toDate(data.startDate)} – ${toDate(data.endDate)}`
      : "Date not specified";

  const whatsappMessage = encodeURIComponent(
    `Hi! I want to rent your scooty from ${toDate(
      data.startDate,
    )} to ${toDate(data.endDate)} between ${
      data.availableFrom
    } and ${data.availableTill} near ${data.location}.`,
  );

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4">

      <div className="flex items-start gap-3">
        <MapPin className="text-[#00AFF5] mt-1" />
        <div>
          <p className="font-semibold text-lg">{data.location}</p>
          <p className="text-gray-500 text-sm">Scooty Available</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{dateRange}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {data.availableFrom} – {data.availableTill}
          </span>
        </div>
      </div>

      <hr />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <Bike className="w-5 h-5 text-[#00AFF5]" />
          <span className="font-medium">Scooty</span>
        </div>

        <div className="flex items-center gap-1 font-bold text-[#00AFF5]">
          <IndianRupee className="w-4 h-4" />
          {data.pricePerHour}/hr
        </div>
      </div>

      <div className="flex gap-2 flex-wrap text-xs">
        {data.helmetIncluded && (
          <span className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3 h-3" /> Helmet
          </span>
        )}
        {data.fuelIncluded && (
          <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
            <Fuel className="w-3 h-3" /> Fuel
          </span>
        )}
      </div>

      {data.notes && (
        <p className="text-xs text-gray-500 italic">“{data.notes}”</p>
      )}

      {!showContact && (
        <button
          onClick={() => setShowContact(true)}
          className="mt-2 w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-semibold py-2 rounded-xl"
        >
          Rent this Scooty
        </button>
      )}

      {showContact && (
        <div className="mt-3 bg-gray-50 rounded-xl p-4 space-y-3">
          <p className="text-sm text-gray-600">Contact Owner</p>

          <p className="font-semibold text-lg">{data.ownerName}</p>
          <p className="text-sm text-gray-500">{data.contact}</p>

          <div className="flex gap-3">
            <Link
              href={`tel:${data.contact}`}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call
            </Link>

            <Link
              href={`https://wa.me/91${data.contact}?text=${whatsappMessage}`}
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
