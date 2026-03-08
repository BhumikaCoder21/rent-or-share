"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Trash2,
  Pencil,
  Phone,
  MessageCircle,
  IndianRupee,
  User,
  Shield,
  Fuel,
  Bike,
} from "lucide-react";

import { ScootyRent } from "@/types/rent.types";

interface Props {
  data: ScootyRent;
  onDelete?: (id: string) => void;
}

export default function ScootyRentCard({ data, onDelete }: Props) {
  const [loading, setLoading] = useState(false);
  const [showContact, setShowContact] = useState(false);

  if (!data) return null;

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const isOwner = user?._id === data.owner;

  const formatDate = (d?: string | Date) =>
    d
      ? new Date(d).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })
      : "-";

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this listing?");
    if (!confirmDelete) return;

    try {
      setLoading(true);

      await fetch(`http://localhost:8080/api/rent/${data._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onDelete?.(data._id);
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const isExpired =
    data.availability?.toDate &&
    new Date(data.availability.toDate) < new Date();

  if (isExpired) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi ${data.ownerName}, I want to rent your scooty (${data.vehicle?.vehicleNumber}) listed at ${data.pickupLocation}.`,
  );

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4">
 
      <div className="flex items-center gap-2 font-semibold text-lg">
        <User className="text-[#00AFF5]" />
        {data.ownerName}
      </div>

  
      <div className="flex items-center gap-2 text-gray-700 text-sm">
        <Bike className="w-4 h-4 text-[#00AFF5]" />
        {data.vehicle?.vehicleNumber} ({data.vehicle?.type})
      </div>

   
      <div className="flex items-center gap-2 text-gray-700 text-sm">
        <MapPin className="w-4 h-4 text-[#00AFF5]" />
        {data.pickupLocation}
      </div>

    
      <div className="flex items-center gap-2 text-gray-700">
        <IndianRupee className="w-4 h-4 text-[#00AFF5]" />
        <span className="font-semibold">₹{data.pricePerHour} / hour</span>
      </div>

      <hr />

      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {formatDate(data.availability?.fromDate)} →{" "}
          {formatDate(data.availability?.toDate)}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {data.availability?.fromTime} - {data.availability?.toTime}
        </div>
      </div>

      <div className="flex gap-4 text-sm text-gray-600">
        {data.helmetIncluded && (
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-green-600" />
            Helmet Included
          </div>
        )}

        {data.fuelIncluded && (
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4 text-orange-500" />
            Fuel Included
          </div>
        )}
      </div>

  
      {data.notes && (
        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
          {data.notes}
        </p>
      )}

      {!isOwner && (
        <>
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

              <div className="flex gap-3">
                <a
                  href={`tel:${data.contact}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>

                <a
                  href={`https://wa.me/${data.contact}?text=${whatsappMessage}`}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2 rounded-xl font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </>
      )}

    
      {isOwner && (
        <div className="flex gap-3 mt-2">
          <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold">
            <Pencil className="w-4 h-4" />
            Update
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold"
          >
            <Trash2 className="w-4 h-4" />
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      )}
    </div>
  );
}
