import type { BookingData } from "./hooks/useBooking";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface BookingResponse {
  id: number;
  type: string;
  pickup_address: string;
  dropoff_address: string;
  pickup_date: string;
  pickup_time: string;
  phone: string;
  first_name: string;
  last_name: string;
  email: string;
  passengers: number;
  distance_text?: string;
  duration_text?: string;
  created_at: string;
}

export async function submitBooking(
  data: BookingData,
): Promise<BookingResponse> {
  const response = await fetch(`${API_BASE_URL}/api/bookings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: data.type,
      pickup_address: data.pickupAddress,
      dropoff_address: data.dropoffAddress,
      pickup_date: data.pickupDate,
      pickup_time: data.pickupTime,
      phone: data.phone,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      passengers: data.passengers,
      distance_text: data.distanceText,
      duration_text: data.durationText,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(result);
    throw new Error("Booking failed");
  }

  return result;
}

export interface LookupCustomerResponse {
  exists: boolean;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export async function lookupCustomer(
  phone: string,
): Promise<LookupCustomerResponse> {
  const encodedPhone = encodeURIComponent(phone);

  const response = await fetch(
    `${API_BASE_URL}/api/bookings/lookup_customer/?phone=${encodedPhone}`,
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Failed to lookup customer");
  }

  return result;
}
