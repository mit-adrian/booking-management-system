import type { BookingType } from "../hooks/useBooking";
import { ArrowRight, Clock } from "lucide-react";

interface BookingTabsProps {
  type: BookingType;
  onChange: (value: BookingType) => void;
}

export function BookingTabs({ type, onChange }: BookingTabsProps) {
  return (
    <div className="w-full border-b border-gray-300 pb-6">
      <div className="flex w-full border rounded-lg border-gray-300 overflow-hidden">
        {(["oneway", "hourly"] as const).map((value) => {
          const isActive = type === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={`flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all duration-300 flex-1
                ${
                  isActive
                    ? "bg-secondary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {value === "oneway" ? (
                <ArrowRight
                  size={16}
                  className={isActive ? "text-white" : "text-secondary"}
                />
              ) : (
                <Clock
                  size={16}
                  className={isActive ? "text-white" : "text-secondary"}
                />
              )}

              {value === "oneway" ? "One-way" : "Hourly"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
