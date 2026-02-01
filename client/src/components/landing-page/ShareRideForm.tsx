"use client";

import { useState, useRef, useEffect } from "react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Car, 
  Bike, 
  IndianRupee, 
  ChevronLeft, 
  ChevronRight,
  X 
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

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    if (newDate.getMonth() < today.getMonth() && newDate.getFullYear() === today.getFullYear()) return;
    setCurrentDate(new Date(newDate));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(<div key={`empty-${i}`} className="w-10 h-10" />);

    for (let day = 1; day <= daysInMonth; day++) {
      const dateToRender = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      dateToRender.setHours(0, 0, 0, 0);
      const isPast = dateToRender < today;
      const isSelected = selectedDate && dateToRender.getTime() === selectedDate.getTime();
      const isToday = dateToRender.getTime() === today.getTime();

      days.push(
        <button
          key={day}
          onClick={(e) => { e.preventDefault(); onSelect(dateToRender); }}
          disabled={isPast}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
            ${isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-50 text-gray-700"}
            ${isSelected ? "!bg-[#00AFF5] !text-white hover:!bg-[#0099d6]" : ""}
            ${isToday && !isSelected ? "border border-gray-400 text-gray-900" : ""}
          `}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="absolute top-full left-0 mt-2 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-50 w-[340px]">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-500"><ChevronLeft className="w-5 h-5" /></button>
        <span className="text-lg font-bold text-gray-800">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
        <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded-full text-[#00AFF5]"><ChevronRight className="w-6 h-6" /></button>
      </div>
      <div className="grid grid-cols-7 mb-2 text-center text-xs font-semibold text-gray-500 uppercase">{["S","M","T","W","T","F","S"].map(d => <span key={d}>{d}</span>)}</div>
      <div className="grid grid-cols-7 gap-y-1 justify-items-center">{renderDays()}</div>
    </div>
  );
}

interface ShareRideFormProps {
  onClose: () => void;
}

export default function ShareRideForm({ onClose }: ShareRideFormProps) {
  
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = ["00", "15", "30", "45"];

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    time: "09:00 AM",
    seats: 1,
    price: "",
    vehicleType: "scooty",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ride Posted:", { ...formData, date: selectedDate });
    alert(`Ride Published! Time: ${formData.time}`);
    onClose();
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
    
      <div className="bg-[#00AFF5] px-8 py-6 flex justify-between items-start shrink-0">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Post a Ride</h2>
          <p className="text-blue-100 mt-2 text-sm md:text-base">Share your journey and save costs.</p>
        </div>
        <button onClick={onClose} className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-8 space-y-8 overflow-y-auto custom-scrollbar">
        <form onSubmit={handleSubmit} className="space-y-8">
          
        
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00AFF5]" /> Route Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Leaving From</label>
                <input 
                  type="text" required placeholder="College Gate 1"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFF5] transition-all font-medium text-gray-700"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                />
              </div>
              <div className="relative group">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Going To</label>
                <input 
                  type="text" required placeholder="City Center Mall"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFF5] transition-all font-medium text-gray-700"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00AFF5]" /> Date & Time
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              
        
              <div className="relative" ref={calendarRef}>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Date</label>
                <div 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-3 cursor-pointer hover:border-blue-300 transition-colors"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className={`font-medium ${selectedDate ? "text-gray-700" : "text-gray-400"}`}>
                    {selectedDate ? selectedDate.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long' }) : "Select Date"}
                  </span>
                </div>
                {isCalendarOpen && <CalendarPopup selectedDate={selectedDate} onSelect={(d) => { setSelectedDate(d); setIsCalendarOpen(false); }} onClose={() => setIsCalendarOpen(false)} />}
              </div>

             
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                  Departure Time
                </label>
                <div className="flex w-full bg-gray-50 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-[#00AFF5] transition-all overflow-hidden">
                  
              
                  <select
                    className="flex-1 bg-transparent p-3 text-center font-medium text-gray-700 outline-none appearance-none cursor-pointer hover:bg-gray-100"
                    onChange={(e) => {
                      const parts = formData.time.split(/[: ]/); // Split by : or space
                      const min = parts[1] || "00";
                      const per = parts[2] || "AM";
                      setFormData({ ...formData, time: `${e.target.value}:${min} ${per}` });
                    }}
                    value={formData.time.split(/[: ]/)[0]}
                  >
                    {hours.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>

                  <div className="flex items-center justify-center text-gray-400 font-bold">:</div>

             
                  <select
                    className="flex-1 bg-transparent p-3 text-center font-medium text-gray-700 outline-none appearance-none cursor-pointer hover:bg-gray-100"
                    onChange={(e) => {
                      const parts = formData.time.split(/[: ]/);
                      const hr = parts[0] || "09";
                      const per = parts[2] || "AM";
                      setFormData({ ...formData, time: `${hr}:${e.target.value} ${per}` });
                    }}
                    value={formData.time.split(/[: ]/)[1]}
                  >
                    {minutes.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>

                  <select
                    className="flex-1 bg-gray-100 p-3 text-center font-bold text-[#00AFF5] outline-none appearance-none cursor-pointer hover:bg-gray-200 border-l border-gray-200"
                    onChange={(e) => {
                      const parts = formData.time.split(/[: ]/);
                      const hr = parts[0] || "09";
                      const min = parts[1] || "00";
                      setFormData({ ...formData, time: `${hr}:${min} ${e.target.value}` });
                    }}
                    value={formData.time.split(/[: ]/)[2]}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
              <Car className="w-5 h-5 text-[#00AFF5]" /> Ride Info
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              
              <div className="col-span-2 md:col-span-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Vehicle</label>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button type="button" onClick={() => setFormData({...formData, vehicleType: 'scooty'})} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${formData.vehicleType === 'scooty' ? 'bg-white text-[#00AFF5] shadow-sm' : 'text-gray-500'}`}><Bike className="w-4 h-4" /> Scooty</button>
                  <button type="button" onClick={() => setFormData({...formData, vehicleType: 'car'})} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${formData.vehicleType === 'car' ? 'bg-white text-[#00AFF5] shadow-sm' : 'text-gray-500'}`}><Car className="w-4 h-4" /> Car</button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Seats</label>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setFormData(prev => ({...prev, seats: Math.max(1, prev.seats - 1)}))} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 font-bold">-</button>
                  <span className="text-xl font-bold text-gray-800 w-4 text-center">{formData.seats}</span>
                  <button type="button" onClick={() => setFormData(prev => ({...prev, seats: Math.min(6, prev.seats + 1)}))} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 font-bold">+</button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Price</label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="number" placeholder="50" required className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFF5] font-medium text-gray-700" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#00AFF5] hover:bg-[#0099d6] text-white font-bold text-xl py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98]">
            Publish Ride
          </button>
        </form>
      </div>
    </div>
  );
}