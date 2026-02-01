"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Calendar,
  Circle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


function CalendarPopup({
  selectedDate,
  onSelect,
  onClose,
}: {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onClose: () => void;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );
  const firstDay = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    if (
      newDate.getMonth() < today.getMonth() &&
      newDate.getFullYear() === today.getFullYear()
    )
      return;
    setCurrentDate(new Date(newDate));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateToRender = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      dateToRender.setHours(0, 0, 0, 0);

      const isToday = dateToRender.getTime() === today.getTime();
      const isPast = dateToRender < today;
      const isSelected =
        selectedDate && dateToRender.getTime() === selectedDate.getTime();

      days.push(
        <button
          key={day}
          onClick={(e) => {
            e.preventDefault();
            onSelect(dateToRender);
          }}
          disabled={isPast}
          className={`
            w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
            ${isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-50 text-gray-700"}
            ${isSelected ? "!bg-[#00AFF5] !text-white hover:!bg-[#0099d6]" : ""}
            ${isToday && !isSelected ? "border border-gray-400 text-gray-900" : ""}
          `}
        >
          {day}
        </button>,
      );
    }
    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="absolute top-full left-0 mt-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-50 w-[340px]">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 rounded-full text-gray-500"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 rounded-full text-[#00AFF5]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <span
            key={d}
            className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
          >
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1 justify-items-center">
        {renderDays()}
      </div>
    </div>
  );
}

export default function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { from, to, date: selectedDate });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="w-full mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full shadow-lg p-1 border border-gray-100 relative"
      >
        <div className="flex-1 w-full md:w-auto relative group px-4 py-3 md:py-2">
          <div className="flex items-center gap-3">
            <Circle className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Leaving from"
              className="w-full text-gray-700 font-medium placeholder:text-gray-500 bg-transparent outline-none truncate"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-200" />
        <div className="md:hidden w-full h-px bg-gray-200 my-1" />

   
        <div className="flex-1 w-full md:w-auto relative group px-4 py-3 md:py-2">
          <div className="flex items-center gap-3">
            <Circle className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Going to"
              className="w-full text-gray-700 font-medium placeholder:text-gray-500 bg-transparent outline-none truncate"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-200" />
        <div className="md:hidden w-full h-px bg-gray-200 my-1" />

        <div
          className="flex-1 w-full md:w-auto relative group px-4 py-3 md:py-2 cursor-pointer"
          ref={calendarRef}
        >
          <div
            className="flex items-center gap-3"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <Calendar
              className={`w-5 h-5 ${selectedDate ? "text-gray-800" : "text-gray-400"}`}
            />

            <input
              type="text"
              readOnly
              placeholder="Today"
              className="w-full text-gray-700 font-medium bg-transparent outline-none cursor-pointer"
              value={formatDateDisplay(selectedDate)}
            />
          </div>

     
          {isCalendarOpen && (
            <CalendarPopup
              selectedDate={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setIsCalendarOpen(false);
              }}
              onClose={() => setIsCalendarOpen(false)}
            />
          )}
        </div>


        <div className="w-full md:w-auto p-1">
          <button
            type="submit"
            className="w-full md:w-auto bg-[#00AFF5] hover:bg-[#0099d6] text-white font-bold text-lg px-8 py-3 rounded-xl md:rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
