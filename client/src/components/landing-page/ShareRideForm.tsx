"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Bike,
  IndianRupee,
  X,
} from "lucide-react";
import CalendarPopup from "@/components/ui/CalendarPopup";

interface ShareRideFormProps {
  onClose?: () => void;
  rideId?: string;
}

export default function ShareRideForm({ onClose, rideId }: ShareRideFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    time: "09:00 AM",
    seats: 1,
    price: "",
    vehicleType: "scooty",
    phone: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const token = localStorage.getItem("token");

    const rideData = {
      from: formData.from,
      to: formData.to,
      date: selectedDate,
      time: formData.time,
      seats: Number(formData.seats),
      price: Number(formData.price),
      vehicleType: formData.vehicleType,
      phone: formData.phone,
    };

    try {
      const res = await fetch(
        rideId
          ? `http://localhost:8080/api/rides/${rideId}`
          : "http://localhost:8080/api/rides",
        {
          method: rideId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(rideData),
        },
      );

      const data = await res.json();

      console.log(rideId ? "Ride updated:" : "Ride created:", data);

      if (onClose) {
        onClose(); 
      } else {
        router.push("/main-page"); 
      }
    } catch (error) {
      console.error("Error submitting ride:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl flex flex-col max-h-[90vh]">
      <div className="bg-[#00AFF5] px-8 py-6 flex justify-between items-start shrink-0">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {rideId ? "Update Ride" : "Post a Ride"}
          </h2>
          <p className="text-blue-100 mt-2 text-sm md:text-base">
            Share your journey and save costs.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
         
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <MapPin className="text-[#00AFF5]" /> Route Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Leaving From"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
              />

              <input
                required
                placeholder="Going To"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
              />
            </div>
          </div>

          <hr className="border-gray-100" />

       
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <Clock className="text-[#00AFF5]" /> Date & Time
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div ref={calendarRef} className="relative">
                <div
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-3 cursor-pointer"
                >
                  <Calendar className="text-gray-400" />

                  {selectedDate
                    ? selectedDate.toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "numeric",
                        month: "long",
                      })
                    : "Select Date"}
                </div>

                {isCalendarOpen && (
                  <CalendarPopup
                    selectedDate={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setIsCalendarOpen(false);
                    }}
                  />
                )}
              </div>

              <input
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

      
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <Car className="text-[#00AFF5]" /> Ride Info
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
         
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Vehicle
                </label>

                <div className="flex bg-gray-100 p-1 rounded-xl mt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, vehicleType: "scooty" })
                    }
                    className={`flex-1 py-2 rounded-lg font-semibold ${
                      formData.vehicleType === "scooty"
                        ? "bg-white text-[#00AFF5]"
                        : "text-gray-500"
                    }`}
                  >
                    <Bike className="inline w-4 h-4 mr-1" />
                    Scooty
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, vehicleType: "car" })
                    }
                    className={`flex-1 py-2 rounded-lg font-semibold ${
                      formData.vehicleType === "car"
                        ? "bg-white text-[#00AFF5]"
                        : "text-gray-500"
                    }`}
                  >
                    <Car className="inline w-4 h-4 mr-1" />
                    Car
                  </button>
                </div>
              </div>

           
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Seats
                </label>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        seats: Math.max(1, p.seats - 1),
                      }))
                    }
                    className="w-10 h-10 rounded-full bg-gray-100 font-bold"
                  >
                    -
                  </button>

                  <span className="font-bold">{formData.seats}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        seats: Math.min(6, p.seats + 1),
                      }))
                    }
                    className="w-10 h-10 rounded-full bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

         
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Price
                </label>

                <div className="relative mt-1">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="number"
                    required
                    placeholder="50"
                    className="w-full pl-9 p-3 bg-gray-50 border border-gray-200 rounded-xl"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>

           
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Phone
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-bold text-xl py-4 rounded-xl"
          >
            {rideId ? "Update Ride" : "Publish Ride"}
          </button>
        </form>
      </div>
    </div>
  );
}
