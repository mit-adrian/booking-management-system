import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="space-y-2">
        <p className="text-lg">Welcome, {user?.name}</p>
        <p className="text-sm text-gray-500">Role: {user?.role}</p>
      </div>

      <div className="flex gap-4">
        {/* 🔵 Go to Bookings */}
        <button
          onClick={() => navigate("/dashboard/bookings")}
          className="bg-secondary text-white px-6 py-2 rounded font-semibold hover:opacity-90 transition"
        >
          View Bookings
        </button>

        {/* 🔴 Logout */}
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
