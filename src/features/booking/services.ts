import type { BookingData } from "./hooks/useBooking";

export interface MockCustomer {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
}

const mockCustomers: MockCustomer[] = [
  {
    phone: "09171234567",
    firstName: "Adrian",
    lastName: "Siangco",
    email: "adrian@example.com",
  },
];

export async function checkPhoneNumber(
  phone: string,
): Promise<MockCustomer | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = mockCustomers.find((customer) => customer.phone === phone);
      resolve(found || null);
    }, 800);
  });
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

export async function submitBooking(
  data: BookingData,
): Promise<BookingResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data.pickupAddress || !data.phone) {
        reject(new Error("Missing required booking fields."));
        return;
      }

      const existingBookings = JSON.parse(
        localStorage.getItem("mock_bookings") || "[]",
      );

      const bookingId = `BK-${Date.now()}`;

      const newBooking = {
        id: bookingId,
        createdAt: new Date().toISOString(),
        ...data,
      };

      localStorage.setItem(
        "mock_bookings",
        JSON.stringify([...existingBookings, newBooking]),
      );

      // 🔥 Notify admin dashboard
      window.dispatchEvent(new Event("mock-booking-updated"));

      resolve({
        success: true,
        message: "Booking successfully submitted!",
        bookingId,
      });
    }, 1200);
    console.log("submitBooking called");
  });
}
