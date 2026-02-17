import type { BookingData } from "../hooks/useBooking";
import { User, Mail, Hash } from "lucide-react";

interface PassengerSectionProps {
  booking: BookingData;
  errors: Record<string, string>;
  updateField: <K extends keyof BookingData>(
    field: K,
    value: BookingData[K],
  ) => void;
}

export function PassengerSection({
  booking,
  errors,
  updateField,
}: PassengerSectionProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            First name
          </label>

          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

          <input
            type="text"
            value={booking.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pl-10 pr-3"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            Last name
          </label>

          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

          <input
            type="text"
            value={booking.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pl-10 pr-3"
          />
        </div>
      </div>

      <div className="relative">
        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
          Email
        </label>

        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

        <input
          type="email"
          value={booking.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pl-10 pr-3"
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-700">
          How many passengers are expected for the trip?
        </p>

        <div className="relative max-w-xs">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            # Passengers
          </label>

          <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

          <input
            type="number"
            min={1}
            value={booking.passengers}
            onChange={(e) => updateField("passengers", Number(e.target.value))}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pl-10 pr-3"
          />
        </div>

        {errors.passengers && (
          <p className="text-sm text-red-500">{errors.passengers}</p>
        )}
      </div>
    </div>
  );
}
