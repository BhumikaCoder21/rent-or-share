"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPopupProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function CalendarPopup({
  selectedDate,
  onSelect,
}: CalendarPopupProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (y: number, m: number) =>
    new Date(y, m + 1, 0).getDate();

  const getFirstDay = (y: number, m: number) => new Date(y, m, 1).getDay();

  const handlePrevMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    if (d < today) return;
    setCurrentDate(d);
  };

  const handleNextMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    setCurrentDate(d);
  };

  const renderDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth(),
    );
    const firstDay = getFirstDay(
      currentDate.getFullYear(),
      currentDate.getMonth(),
    );

    for (let i = 0; i < firstDay; i++)
      days.push(<div key={`e-${i}`} className="w-10 h-10" />);

    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      d.setHours(0, 0, 0, 0);

      const isPast = d < today;
      const isToday = d.getTime() === today.getTime();
      const isSelected = selectedDate && d.getTime() === selectedDate.getTime();

      days.push(
        <button
          key={day}
          disabled={isPast}
          onClick={() => onSelect(d)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
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

  return (
    <div className="absolute top-full left-0 mt-2 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-50 w-[340px]">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 rounded-full text-gray-500"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-lg font-bold text-gray-800">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </span>

        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 rounded-full text-[#00AFF5]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2 text-center text-xs font-semibold text-gray-500 uppercase">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1 justify-items-center">
        {renderDays()}
      </div>
    </div>
  );
}
