"use client";

import { useState } from "react";
import { Bike, IndianRupee, Clock, MapPin, Phone, User, X } from "lucide-react";

interface ScootyRentFormProps {
  onClose?: () => void;
}

export default function ScootyRentForm({ onClose }: ScootyRentFormProps) {
  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const minutes = ["00", "15", "30", "45"];

  const [formData, setFormData] = useState({
    ownerName: "",
    contact: "",
    location: "",
    pricePerHour: "",
    availableFrom: "09:00 AM",
    availableTill: "06:00 PM",
    helmetIncluded: true,
    fuelIncluded: false,
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scooty Rent Data:", formData);
    onClose?.();
  };

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
   
      <div className="bg-[#00AFF5] px-6 py-5 flex justify-between items-start shrink-0">
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

          <hr className="border-gray-100" />

       
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Bike className="text-[#00AFF5]" /> Scooty Details
            </h3>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                required
                placeholder="Pickup Location"
                className="w-full pl-9 p-3 bg-gray-50 border border-gray-200 rounded-xl"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                required
                type="number"
                placeholder="Price per hour"
                className="w-full pl-9 p-3 bg-gray-50 border border-gray-200 rounded-xl"
                value={formData.pricePerHour}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pricePerHour: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Clock className="text-[#00AFF5]" /> Availability
            </h3>

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
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Extras</h3>

            <label className="flex items-center gap-3">
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

            <label className="flex items-center gap-3">
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
            placeholder="Any rules or notes (optional)"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl resize-none"
            rows={3}
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
          />

          
          <button
            type="submit"
            className="w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-bold text-lg py-4 rounded-xl"
          >
            List Scooty for Rent
          </button>
        </form>
      </div>
    </div>
  );
}
