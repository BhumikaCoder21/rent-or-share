"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bike,
  IndianRupee,
  Clock,
  MapPin,
  Phone,
  User,
  Calendar,
  X,
} from "lucide-react";
import CalendarPopup from "@/components/ui/CalendarPopup";

interface ScootyRentFormProps {
  onClose?: () => void;
}

export default function ScootyRentForm({ onClose }: ScootyRentFormProps) {
  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );

  const minutes = ["00", "15", "30", "45"];

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: user?.name || "",
    contact: user?.phone || "",
    vehicleNumber: "",
    type: "scooter",
    location: "",
    pricePerHour: "",
    startDate: null as Date | null,
    endDate: null as Date | null,
    availableFrom: "09:00 AM",
    availableTill: "06:00 PM",
    helmetIncluded: true,
    fuelIncluded: false,
    notes: "",
  });

  const [openCalendar, setOpenCalendar] = useState<"start" | "end" | null>(
    null,
  );

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setOpenCalendar(null);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

     console.log({
       owner: user?._id,
       ownerName: formData.ownerName,
       contact: formData.contact,
       vehicleNumber: formData.vehicleNumber,
       type: "scooty",
       pickupLocation: formData.location,
       pricePerHour: Number(formData.pricePerHour),
     });

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ownerId: user?._id,
          ownerName: formData.ownerName,
          contact: formData.contact,
          vehicleNumber: formData.vehicleNumber,
          location: formData.location,
          pricePerHour: Number(formData.pricePerHour),
          startDate: formData.startDate,
          endDate: formData.endDate,
          availableFrom: formData.availableFrom,
          availableTill: formData.availableTill,
          helmetIncluded: formData.helmetIncluded,
          fuelIncluded: formData.fuelIncluded,
          notes: formData.notes,
        }),
      });

     if (!res.ok) {
       const err = await res.json();
       console.log("Server error:", err);
       throw new Error("Failed to create listing");
     }

      onClose?.();
    } catch (err) {
      console.error(err);
      alert("Failed to list scooty");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (d: Date | null) =>
    d
      ? d.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "long",
        })
      : "Select date";

  const TimePicker = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
  }) => {
    const [hr, min, per] = value.split(/[: ]/);

    return (
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
          {label}
        </label>

        <div className="flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
          <select
            className="flex-1 p-3 text-center bg-transparent font-medium"
            value={hr}
            onChange={(e) => onChange(`${e.target.value}:${min} ${per}`)}
          >
            {hours.map((h) => (
              <option key={h}>{h}</option>
            ))}
          </select>

          <div className="flex items-center px-1 font-bold text-gray-400">
            :
          </div>

          <select
            className="flex-1 p-3 text-center bg-transparent font-medium"
            value={min}
            onChange={(e) => onChange(`${hr}:${e.target.value} ${per}`)}
          >
            {minutes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <select
            className="flex-1 p-3 text-center bg-gray-100 font-bold text-[#00AFF5]"
            value={per}
            onChange={(e) => onChange(`${hr}:${min} ${e.target.value}`)}
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl flex flex-col max-h-[90vh]">
      

      <div className="bg-[#00AFF5] px-6 py-5 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-white">Give Scooty on Rent</h2>
          <p className="text-blue-100 text-sm mt-1">
            Earn money when your scooty is idle
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
       

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <User className="text-[#00AFF5]" /> Owner Details
            </h3>

            <input
              required
              placeholder="Your Name"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              value={formData.ownerName}
              onChange={(e) =>
                setFormData({ ...formData, ownerName: e.target.value })
              }
            />

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

              <input
                required
                placeholder="Phone Number"
                className="w-full pl-9 p-3 bg-gray-50 border border-gray-200 rounded-xl"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
            </div>
          </div>

          <hr />


          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Bike className="text-[#00AFF5]" /> Scooty Details
            </h3>

            <input
              required
              placeholder="Vehicle Number (e.g. WB34AB1234)"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              value={formData.vehicleNumber}
              onChange={(e) =>
                setFormData({ ...formData, vehicleNumber: e.target.value })
              }
            />

            <input
              required
              placeholder="Pickup Location"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <input
              required
              type="number"
              placeholder="Price per hour"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              value={formData.pricePerHour}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pricePerHour: e.target.value,
                })
              }
            />
          </div>

          <hr />

        

          <div ref={calendarRef} className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Clock className="text-[#00AFF5]" /> Availability
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
            

              <div className="relative">
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                  From Date
                </label>

                <div
                  onClick={() => setOpenCalendar("start")}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-3 cursor-pointer"
                >
                  <Calendar className="text-gray-400" />
                  {formatDate(formData.startDate)}
                </div>

                {openCalendar === "start" && (
                  <CalendarPopup
                    selectedDate={formData.startDate}
                    onSelect={(d) => {
                      setFormData({ ...formData, startDate: d });
                      setOpenCalendar(null);
                    }}
                  />
                )}
              </div>

         

              <div className="relative">
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">
                  To Date
                </label>

                <div
                  onClick={() => setOpenCalendar("end")}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-3 cursor-pointer"
                >
                  <Calendar className="text-gray-400" />
                  {formatDate(formData.endDate)}
                </div>

                {openCalendar === "end" && (
                  <CalendarPopup
                    selectedDate={formData.endDate}
                    onSelect={(d) => {
                      setFormData({ ...formData, endDate: d });
                      setOpenCalendar(null);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TimePicker
                label="Available From"
                value={formData.availableFrom}
                onChange={(v) => setFormData({ ...formData, availableFrom: v })}
              />

              <TimePicker
                label="Available Till"
                value={formData.availableTill}
                onChange={(v) => setFormData({ ...formData, availableTill: v })}
              />
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.helmetIncluded}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      helmetIncluded: e.target.checked,
                    })
                  }
                />
                Helmet Included
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.fuelIncluded}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fuelIncluded: e.target.checked,
                    })
                  }
                />
                Fuel Included
              </label>
            </div>

            <textarea
              placeholder="Extra notes (optional)"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
              rows={3}
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-bold text-lg py-4 rounded-xl"
          >
            {loading ? "Listing..." : "List Scooty for Rent"}
          </button>
        </form>
      </div>
    </div>
  );
}
