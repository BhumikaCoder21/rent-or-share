"use client";

import { useState } from "react";
import { Trash2, Pencil, User, Bike } from "lucide-react";

interface Props {
  data: any;
  onDelete?: (id: string) => void;
}

export default function ScootyRentCard({ data, onDelete }: Props) {
  const [loading, setLoading] = useState(false);

  if (!data) return null;

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const isOwner = user?._id === data.owner?._id;

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this vehicle?");
    if (!confirmDelete) return;

    try {
      setLoading(true);

      await fetch(`http://localhost:8080/api/vehicle/${data._id}`, {
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

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4">
      
      {/* Owner */}
      <div className="flex items-center gap-2 font-semibold text-lg">
        <User className="text-[#00AFF5]" />
        {data.owner?.name || "Unknown Owner"}
      </div>

      {/* Vehicle Type */}
      <div className="flex items-center gap-2 text-gray-700 text-sm">
        <Bike className="w-4 h-4 text-[#00AFF5]" />
        Vehicle Type: {data.type}
      </div>

      {/* Vehicle Number */}
      <div className="text-gray-700 text-sm">
        <span className="font-semibold">Vehicle Number:</span>{" "}
        {data.vehicleNumber}
      </div>

      {/* Created Date */}
      <div className="text-gray-500 text-xs">
        Created: {new Date(data.createdAt).toLocaleString()}
      </div>

      <div className="text-gray-500 text-xs">
        Updated: {new Date(data.updatedAt).toLocaleString()}
      </div>

      {/* Owner Controls */}
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

