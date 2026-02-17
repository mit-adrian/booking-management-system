import type { BookingData } from "./hooks/useBooking";

export interface MockCustomer {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
}

const mockDatabase: MockCustomer[] = [
  {
    phone: "09171234567",
    firstName: "Adrian",
    lastName: "Siangco",
    email: "adrian@example.com",
  },
];

export function checkPhoneNumber(phone: string) {
  return new Promise<MockCustomer | null>((resolve) => {
    setTimeout(() => {
      const found = mockDatabase.find((customer) => customer.phone === phone);
      resolve(found || null);
    }, 800);
  });
}

export interface BookingResponse {
  success: boolean;
  message: string;
}

export function submitBooking(data: BookingData): Promise<BookingResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock API received:", data);

      resolve({
        success: true,
        message: "Booking successfully submitted!",
      });
    }, 1500);
  });
}
