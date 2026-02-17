import { useState, useCallback } from "react";

export type BookingType = "oneway" | "hourly";
export type LocationType = "location" | "airport";

export interface BookingData {
  type: BookingType;

  // Pickup
  pickupDate: string;
  pickupTime: string;
  pickupType: LocationType;
  pickupAddress: string;

  // Stops
  stops: string[];

  // Dropoff
  dropoffType: LocationType;
  dropoffAddress: string;

  // Contact
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  isRecognized: boolean;

  // Passenger
  passengers: number;

  // Route info
  distanceText: string;
  durationText: string;
}

/* =========================
   SINGLE SOURCE OF TRUTH
========================= */

const initialBooking: BookingData = {
  type: "oneway",

  pickupDate: "",
  pickupTime: "",
  pickupType: "location",
  pickupAddress: "",

  stops: [],

  dropoffType: "location",
  dropoffAddress: "",

  phone: "",
  firstName: "",
  lastName: "",
  email: "",
  isRecognized: false,

  passengers: 1,

  distanceText: "",
  durationText: "",
};

export function useBooking() {
  const [booking, setBooking] = useState<BookingData>(initialBooking);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* =========================
     UPDATE FIELD (GENERIC SAFE)
  ========================= */

  const updateField = useCallback(
    <K extends keyof BookingData>(field: K, value: BookingData[K]) => {
      setBooking((prev) => ({
        ...prev,
        [field]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    },
    [],
  );

  /* =========================
     VALIDATION
  ========================= */

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!booking.pickupAddress) newErrors.pickupAddress = "Pickup is required";

    if (!booking.dropoffAddress && booking.type === "oneway")
      newErrors.dropoffAddress = "Dropoff is required";

    if (!booking.pickupDate) newErrors.pickupDate = "Date is required";

    if (!booking.pickupTime) newErrors.pickupTime = "Time is required";

    if (!booking.phone) newErrors.phone = "Phone is required";

    if (!booking.firstName) newErrors.firstName = "First name is required";

    if (!booking.lastName) newErrors.lastName = "Last name is required";

    if (!booking.email) newErrors.email = "Email is required";

    if (booking.passengers < 1)
      newErrors.passengers = "At least 1 passenger required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     RESET (CLEAN + SAFE)
  ========================= */

  const resetBooking = () => {
    setBooking(initialBooking);
    setErrors({});
  };

  return {
    booking,
    errors,
    updateField,
    validate,
    resetBooking,
  };
}
