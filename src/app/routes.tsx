import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

import HomePage from "@/features/home/HomePage";
import FleetPage from "@/features/fleet/FleetPage";
import ServicesPage from "@/features/services/ServicesPage";
import ContactPage from "@/features/contact/ContactPage";
import AboutPage from "@/features/about/AboutPage";
import BlogPage from "@/features/blog/BlogPage";
import BookingPage from "@/features/booking/BookingPage";

import LoginPage from "@/features/auth/LoginPage";
import DashboardPage from "@/features/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "fleet", element: <FleetPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "booking", element: <BookingPage /> },
    ],
  },
  // 🔐 Login (outside public layout if you want clean page)
  {
    path: "/login",
    element: <LoginPage />,
  },

  // 🏢 Protected Layout
  {
    path: "/dashboard",
    element: <ProtectedLayout allowedRoles={["admin"]} />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
]);
