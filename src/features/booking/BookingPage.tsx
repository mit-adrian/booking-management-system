import { useLoadScript } from "@react-google-maps/api";
import { BookingTabs } from "../booking/components/BookingTabs";
import { TripSection } from "../booking/components/TripSection";
import { ContactSection } from "../booking/components/ContactSection";
import { PassengerSection } from "../booking/components/PassengerSection";
import { useBooking } from "./hooks/useBooking";
import { useRouteInfo } from "@/hooks/useRouteInfo";
import { submitBooking } from "./services";
import { useState, useEffect } from "react";

export default function BookingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { booking, errors, updateField, validate, resetBooking } = useBooking();

  const routeInfo = useRouteInfo(booking.pickupAddress, booking.dropoffAddress);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // 🔥 Sync distance + duration into booking state
  useEffect(() => {
    if (routeInfo) {
      updateField("distanceText", routeInfo.distanceText);
      updateField("durationText", routeInfo.durationText);
    }
  }, [routeInfo, updateField]);

  // Auto clear success
  useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  if (loadError) return <p>Google Maps failed to load</p>;
  if (!isLoaded) return <p>Loading Maps...</p>;

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      // ✅ Normalize names before sending
      const formattedBooking = {
        ...booking,
        firstName: booking.firstName.trim().toLowerCase(),
        lastName: booking.lastName.trim().toLowerCase(),
        email: booking.email.trim(),
      };

      const response = await submitBooking(formattedBooking);

      setSuccessMessage(
        `Booking successfully submitted! (Booking ID: ${response.id})`,
      );

      resetBooking();
    } catch (error: unknown) {
      console.error("Submission error:", error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">
        Let's get you on your way!
      </h1>

      <BookingTabs
        type={booking.type}
        onChange={(value) => updateField("type", value)}
      />

      <div className="mt-8 space-y-6">
        <TripSection
          booking={booking}
          errors={errors}
          updateField={updateField}
        />

        {booking.pickupAddress && booking.dropoffAddress && routeInfo && (
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-800 p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Total Distance
                </p>
                <p className="text-xl font-semibold text-white">
                  {routeInfo.distanceText}
                </p>
              </div>

              <div className="hidden sm:block h-10 w-px bg-slate-700" />

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Estimated Time
                </p>
                <p className="text-xl font-semibold text-secondary">
                  {routeInfo.durationText}
                </p>
              </div>
            </div>
          </div>
        )}

        <ContactSection
          booking={booking}
          errors={errors}
          updateField={updateField}
        />

        <PassengerSection
          booking={booking}
          errors={errors}
          updateField={updateField}
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full bg-secondary text-white py-3 rounded font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Continue"}
        </button>

        {successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded text-green-700">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
