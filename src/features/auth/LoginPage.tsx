import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // simulate API delay
    setTimeout(() => {
      login({
        id: "1",
        name: "Admin User",
        role: "admin",
      });

      navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 shadow-lg rounded-lg bg-white dark:bg-slate-800 w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-secondary text-white py-2 rounded hover:opacity-90 transition"
        >
          {loading ? "Logging in..." : "Mock Login as Admin"}
        </button>
      </div>
    </div>
  );
}
