import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>

      <p className="mb-2">Welcome, {user?.name}</p>
      <p className="mb-4">Role: {user?.role}</p>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
