"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Calendar, Circle } from "lucide-react";
import CalendarPopup from "@/components/ui/CalendarPopup";

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (d: Date | null) =>
    d
      ? d.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      : "";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ from, to, selectedDate });
  };

  return (
    <div className="w-full mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="
          flex flex-col md:flex-row
          bg-white rounded-2xl md:rounded-full
          shadow-lg border border-gray-100
          overflow-visible
        "
      >
     
        <div className="flex-1 px-4 py-3">
          <div className="flex items-center gap-3">
            <Circle className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              required
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Leaving from"
              className="w-full bg-transparent outline-none font-medium text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="md:hidden h-px bg-gray-200 mx-4" />
       
        <div className="hidden md:block w-px h-10 bg-gray-200 self-center" />

      
        <div className="flex-1 px-4 py-3">
          <div className="flex items-center gap-3">
            <Circle className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              required
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Going to"
              className="w-full bg-transparent outline-none font-medium text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="md:hidden h-px bg-gray-200 mx-4" />
        
        <div className="hidden md:block w-px h-10 bg-gray-200 self-center" />

      
        <div
          ref={calendarRef}
          className="flex-1 px-4 py-3 relative cursor-pointer"
        >
          <div
            onClick={() => setIsCalendarOpen((p) => !p)}
            className="flex items-center gap-3"
          >
            <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              readOnly
              placeholder="Today"
              value={formatDate(selectedDate)}
              className="w-full bg-transparent outline-none cursor-pointer font-medium text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {isCalendarOpen && (
            <div className="z-50">
              <CalendarPopup
                selectedDate={selectedDate}
                onSelect={(d) => {
                  setSelectedDate(d);
                  setIsCalendarOpen(false);
                }}
              />
            </div>
          )}
        </div>

       
        <div className="p-3 md:p-1">
          <button
            type="submit"
            className="
              w-full md:w-auto
              bg-[#00AFF5] hover:bg-[#0099d6]
              text-white font-bold
              px-8 py-3
              rounded-xl md:rounded-full
              flex items-center justify-center gap-2
              transition-colors
            "
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
