import { useState } from "react";
import { Phone } from "lucide-react";
import type { BookingData } from "../hooks/useBooking";

interface ContactSectionProps {
  booking: BookingData;
  errors: Record<string, string>;
  updateField: <K extends keyof BookingData>(
    field: K,
    value: BookingData[K],
  ) => void;
}

export function ContactSection({
  booking,
  errors,
  updateField,
}: ContactSectionProps) {
  const [loading, setLoading] = useState(false);

  const mockDatabase = [
    {
      phone: "09171234567",
      firstName: "Adrian",
      lastName: "Siangco",
      email: "adrian@example.com",
    },
  ];

  const handlePhoneBlur = () => {
    if (!booking.phone) return;

    setLoading(true);

    setTimeout(() => {
      const found = mockDatabase.find((c) => c.phone === booking.phone);

      if (found) {
        updateField("firstName", found.firstName);
        updateField("lastName", found.lastName);
        updateField("email", found.email);
        updateField("isRecognized", true);
      } else {
        updateField("isRecognized", false);
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Information</h2>

      <div className="relative">
        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
          Phone
        </label>

        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

        <input
          type="tel"
          value={booking.phone}
          onChange={(e) => {
            updateField("phone", e.target.value);
            updateField("isRecognized", false);
          }}
          onBlur={handlePhoneBlur}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {loading && (
        <p className="text-sm text-gray-500">Checking phone number...</p>
      )}

      {booking.isRecognized && (
        <p className="text-sm text-green-600 font-medium">
          Welcome back, {booking.firstName}!
        </p>
      )}

      {!booking.isRecognized && booking.phone && !loading && (
        <p className="text-sm text-gray-500">
          We don't have that phone number on file.
        </p>
      )}

      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
    </div>
  );
}
