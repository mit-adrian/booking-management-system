import type { BookingType } from "../hooks/useBooking";

interface BookingTabsProps {
  type: BookingType;
  onChange: (value: BookingType) => void;
}

export function BookingTabs({ type, onChange }: BookingTabsProps) {
  return (
    <div className="w-full border-b border-gray-300 pb-6">
      <div className="flex w-full rounded-full border border-gray-300 overflow-hidden">
        {(["oneway", "hourly"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`flex-1 py-3 text-sm font-medium transition-all duration-300
              ${
                type === value
                  ? "bg-secondary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {value === "oneway" ? "One-way" : "Hourly"}
          </button>
        ))}
      </div>
    </div>
  );
}
