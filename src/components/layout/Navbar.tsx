import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300
        bg-white dark:bg-slate-900
        text-slate-900 dark:text-white
        ${isScrolled ? "shadow-lg" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo1-45x45.png"
              alt="Boundless Limousines"
              className="h-10 w-auto object-contain"
            />
            <h2>
              <span className="transition-colors duration-300">Boundless</span>
              <br />
              <span className="transition-colors duration-300">Limousines</span>
            </h2>
          </Link>

          {/* Desktop Menu (lg and up only) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <Link className="hover:text-secondary transition" to="/">
              Home
            </Link>
            <Link className="hover:text-secondary transition" to="/fleet">
              Fleet
            </Link>
            <Link className="hover:text-secondary transition" to="/services">
              Services
            </Link>
            <Link className="hover:text-secondary transition" to="/about">
              About
            </Link>
            <Link className="hover:text-secondary transition" to="/blog">
              Blog
            </Link>
            <Link className="hover:text-secondary transition" to="/contact">
              Contact
            </Link>

            {/* CTA */}
            <Link
              to="/booking"
              className="bg-secondary text-white px-5 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger (Mobile + Tablet, below lg) */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-t shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium uppercase tracking-wide">
            <Link onClick={() => setIsMobileOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setIsMobileOpen(false)} to="/fleet">
              Fleet
            </Link>
            <Link onClick={() => setIsMobileOpen(false)} to="/services">
              Services
            </Link>
            <Link onClick={() => setIsMobileOpen(false)} to="/about">
              About
            </Link>
            <Link onClick={() => setIsMobileOpen(false)} to="/blog">
              Blog
            </Link>
            <Link onClick={() => setIsMobileOpen(false)} to="/contact">
              Contact
            </Link>

            <Link
              onClick={() => setIsMobileOpen(false)}
              to="/booking"
              className="bg-secondary text-white px-5 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
