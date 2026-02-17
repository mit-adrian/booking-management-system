import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
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
    <>
      {/* TOP BAR - Desktop Only */}
      {/* TOP BAR - Desktop Only */}
      <div className="hidden lg:block bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a
                href="tel:+639XXXXXXXXX"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Phone size={14} />
                +63 9XX XXX XXXX
              </a>

              <a
                href="mailto:info@boundlesslimo.com"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Mail size={14} />
                info@boundlesslimo.com
              </a>
            </div>

            <div>Open 24/7</div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300
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
                <span>Boundless</span>
                <br />
                <span>Limousines</span>
              </h2>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
              <Link to="/">Home</Link>
              <Link to="/fleet">Our Fleet</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>

              <Link
                to="/booking"
                className="bg-secondary text-white px-5 py-2 rounded font-semibold hover:opacity-90 transition"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Phone Icon (Important for limo business) */}
              <a href="tel:+639XXXXXXXXX" className="hover:opacity-80">
                <Phone size={22} />
              </a>

              <a
                href="mailto:info@boundlesslimo.com"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Mail size={22} />
              </a>

              {/* Hamburger */}
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

        {/* Mobile Dropdown */}
        {isMobileOpen && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-t shadow-lg lg:hidden">
            <div className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium uppercase tracking-wide">
              <Link onClick={() => setIsMobileOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setIsMobileOpen(false)} to="/fleet">
                Our Fleet
              </Link>
              <Link onClick={() => setIsMobileOpen(false)} to="/services">
                Our Services
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
    </>
  );
}
