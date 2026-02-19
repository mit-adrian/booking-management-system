import { GoogleAddressInput } from "./GoogleAddressInput";
import type { BookingData, LocationType } from "../hooks/useBooking";
import { Calendar, Clock, MapPin } from "lucide-react";

interface TripSectionProps {
  booking: BookingData;
  errors: Record<string, string>;
  updateField: <K extends keyof BookingData>(
    field: K,
    value: BookingData[K],
  ) => void;
}

export function TripSection({
  booking,
  errors,
  updateField,
}: TripSectionProps) {
  const addStop = () => {
    updateField("stops", [...booking.stops, ""]);
  };

  const updateStop = (index: number, value: string) => {
    const updatedStops = [...booking.stops];
    updatedStops[index] = value;
    updateField("stops", updatedStops);
  };

  return (
    <div className="space-y-10">
      {/* ================= PICKUP ================= */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Pickup</h2>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <input
                type="date"
                value={booking.pickupDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => updateField("pickupDate", e.target.value)}
                className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary ${
                  errors.pickupDate ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.pickupDate && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <input
                type="time"
                value={booking.pickupTime}
                onChange={(e) => updateField("pickupTime", e.target.value)}
                className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary ${
                  errors.pickupTime ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            {errors.pickupTime && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>
            )}
          </div>
        </div>

        {/* Location / Airport Toggle */}
        <div className="flex gap-3">
          {(["location", "airport"] as LocationType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateField("pickupType", type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                booking.pickupType === type
                  ? "border-secondary text-secondary"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {type === "location" ? "Location" : "Airport"}
            </button>
          ))}
        </div>

        {/* Pickup Address */}
        <div>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs text-gray-500">
              Location
            </label>
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />

            <GoogleAddressInput
              value={booking.pickupAddress}
              onChange={(value) => updateField("pickupAddress", value)}
              onSelect={(value) => updateField("pickupAddress", value)}
              types={
                booking.pickupType === "airport" ? ["airport"] : ["geocode"]
              }
              className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.pickupAddress ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.pickupAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.pickupAddress}</p>
          )}
        </div>

        {/* Stops */}
        {booking.stops.map((stop, index) => (
          <div key={index} className="flex gap-3 items-center">
            <input
              type="text"
              placeholder={`Stop ${index + 1}`}
              value={stop}
              onChange={(e) => updateStop(index, e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-300 rounded-lg py-3 px-3"
            />

            <button
              type="button"
              onClick={() => {
                const updatedStops = booking.stops.filter(
                  (_, i) => i !== index,
                );
                updateField("stops", updatedStops);
              }}
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addStop}
          className="text-secondary text-sm font-medium"
        >
          + Add a stop
        </button>
      </div>

      {/* ================= DROPOFF ================= */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Drop off</h2>

        {/* Location Toggle */}
        <div className="flex gap-3">
          {(["location", "airport"] as LocationType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateField("dropoffType", type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                booking.dropoffType === type
                  ? "border-secondary text-secondary"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              {type === "location" ? "Location" : "Airport"}
            </button>
          ))}
        </div>

        {/* Dropoff Address */}
        <div>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs text-gray-500">
              Location
            </label>
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />

            <GoogleAddressInput
              value={booking.dropoffAddress}
              onChange={(value) => updateField("dropoffAddress", value)}
              onSelect={(value) => updateField("dropoffAddress", value)}
              types={
                booking.dropoffType === "airport" ? ["airport"] : ["geocode"]
              }
              className={`w-full bg-gray-50 border rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary ${
                errors.dropoffAddress ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.dropoffAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.dropoffAddress}</p>
          )}
        </div>
      </div>
    </div>
  );
}
