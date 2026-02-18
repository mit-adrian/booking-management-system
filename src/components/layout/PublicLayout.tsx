import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingThemeToggle from "./FloatingThemeToggle";
import FloatingScreenSizeTracker from "./FloatingScreenSizeTracker";
import ScrollToTop from "./ScrollToTop";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text transition-colors duration-300">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingThemeToggle />
      <FloatingScreenSizeTracker />
    </div>
  );
}
