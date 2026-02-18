import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface StoredBooking {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  pickupAddress: string;
  dropoffAddress: string;
  passengers: number;
  pickupDate: string;
  pickupTime: string;
  distanceText?: string;
  durationText?: string;
}

const AdminBookingsPage = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<StoredBooking[]>(() => {
    return JSON.parse(localStorage.getItem("mock_bookings") || "[]");
  });

  useEffect(() => {
    const handleUpdate = () => {
      const stored = JSON.parse(localStorage.getItem("mock_bookings") || "[]");
      setBookings(stored);
    };

    window.addEventListener("mock-booking-updated", handleUpdate);

    return () => {
      window.removeEventListener("mock-booking-updated", handleUpdate);
    };
  }, []);

  return (
    <div>
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-4 text-sm text-secondary hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold mb-6">
        Admin Dashboard – Bookings
      </h1>

      <p className="mb-4 text-sm text-gray-500">
        Live bookings: {bookings.length}
      </p>

      {bookings.length === 0 ? (
        <div className="p-6 bg-gray-100 rounded">No bookings yet.</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Booking ID</th>
                <th className="p-3 border text-left">Customer</th>
                <th className="p-3 border text-left">Phone</th>
                <th className="p-3 border text-left">Pickup</th>
                <th className="p-3 border text-left">Dropoff</th>
                <th className="p-3 border text-left">Passengers</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Distance</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{booking.id.slice(0, 8)}</td>
                  <td className="p-3 border">
                    {booking.firstName} {booking.lastName}
                  </td>
                  <td className="p-3 border">{booking.phone}</td>
                  <td className="p-3 border">{booking.pickupAddress}</td>
                  <td className="p-3 border">{booking.dropoffAddress}</td>
                  <td className="p-3 border">{booking.passengers}</td>
                  <td className="p-3 border">
                    {booking.pickupDate} {booking.pickupTime}
                  </td>
                  <td className="p-3 border">{booking.distanceText || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBookingsPage;
