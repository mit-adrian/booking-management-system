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

  const { booking, errors, updateField, validate, resetBooking } = useBooking();

  const routeInfo = useRouteInfo(booking.pickupAddress, booking.dropoffAddress);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

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

      const response = await submitBooking(booking);

      if (response.success) {
        resetBooking();

        // Small delay before showing success
        setTimeout(() => {
          setSuccessMessage(response.message);
        }, 400); // 400ms feels smooth
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">
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

        {/* ✅ Distance Display */}
        {routeInfo && (
          <div className="p-4 bg-gray-50 dark:bg-slate-800 border rounded-lg">
            <p className="text-sm">
              <strong>Distance:</strong> {routeInfo.distanceText}
            </p>
            <p className="text-sm">
              <strong>Estimated time:</strong> {routeInfo.durationText}
            </p>
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
      </div>
    </div>
  );
}
