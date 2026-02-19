import { useState, useEffect } from "react";
import type { BookingData } from "../hooks/useBooking";
import { lookupCustomer } from "../services";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

  useEffect(() => {
    const checkPhone = async () => {
      if (!booking.phone || !isValidPhoneNumber(booking.phone)) return;

      try {
        setLoading(true);

        const result = await lookupCustomer(booking.phone);

        if (result.exists) {
          updateField("firstName", result.first_name || "");
          updateField("lastName", result.last_name || "");
          updateField("email", result.email || "");
          updateField("isRecognized", true);
        } else {
          updateField("isRecognized", false);
        }
      } catch (error) {
        console.error("Lookup error:", error);
        updateField("isRecognized", false);
      } finally {
        setLoading(false);
      }
    };

    checkPhone();
  }, [booking.phone, updateField]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Information</h2>

      <div className="space-y-2">
        <div className="relative">
          <PhoneInput
            international
            defaultCountry="US"
            placeholder="Enter phone number"
            value={booking.phone}
            onChange={(value) => {
              updateField("phone", value || "");
              updateField("isRecognized", false);
            }}
            className={`w-full bg-gray-50 rounded-lg py-3 px-3 border transition-all
              ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-secondary"
              }
              focus:outline-none focus:ring-2
            `}
          />
        </div>
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
