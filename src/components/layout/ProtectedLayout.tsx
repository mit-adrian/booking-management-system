import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedLayoutProps {
  allowedRoles?: string[];
}

export default function ProtectedLayout({
  allowedRoles,
}: ProtectedLayoutProps) {
  const { user } = useAuth();

  // 🔐 Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔐 Role restriction (RBAC)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background text-text">
      {/* Sidebar here later */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        Dashboard Sidebar
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
