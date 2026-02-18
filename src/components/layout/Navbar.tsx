import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const popoverRef = useRef<HTMLDivElement | null>(null);
  const [activePopover, setActivePopover] = useState<"phone" | "email" | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setActivePopover(null);
      }
    }

    if (activePopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopover]);

  return (
    <>
      {/* TOP BAR - Desktop Only */}
      <div className="hidden xl:block bg-black text-white text-sm relative z-60">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-10">
            <div>Premium chauffeur service available 24/7</div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6">
                {/* PHONE */}
                <div
                  className="relative"
                  ref={activePopover ? popoverRef : null}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePopover(
                        activePopover === "phone" ? null : "phone",
                      );
                    }}
                    className="flex items-center gap-2 hover:opacity-80"
                  >
                    <Phone size={14} />
                    +63 9XX XXX XXXX
                  </button>

                  {activePopover === "phone" && (
                    <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-60">
                      <button
                        onClick={() => {
                          window.location.href = "tel:+639XXXXXXXXX";
                          setActivePopover(null);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        Call Number
                      </button>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("+639XXXXXXXXX");
                          setActivePopover(null);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        Copy Number
                      </button>
                    </div>
                  )}
                </div>

                {/* EMAIL */}
                <div
                  className="relative"
                  ref={activePopover ? popoverRef : null}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePopover(
                        activePopover === "email" ? null : "email",
                      );
                    }}
                    className="flex items-center gap-2 hover:opacity-80"
                  >
                    <Mail size={14} />
                    info@boundlesslimo.com
                  </button>

                  {activePopover === "email" && (
                    <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-60">
                      <button
                        onClick={() => {
                          window.location.href =
                            "mailto:info@boundlesslimo.com";
                          setActivePopover(null);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        Send Email
                      </button>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "info@boundlesslimo.com",
                          );
                          setActivePopover(null);
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        Copy Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <h4 className="font-semibold uppercase">
                Boundless <span className="text-secondary">Limousine</span>
              </h4>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
              {[
                { name: "Home", path: "/" },
                { name: "Our Fleet", path: "/fleet" },
                { name: "Our Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <Link key={item.name} to={item.path} className="relative group">
                  <span className="hover:text-secondary transition">
                    {item.name}
                  </span>

                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <Link
                to="/booking"
                className="bg-secondary text-white px-5 py-2 rounded font-semibold hover:opacity-90 transition hover:text-black"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center gap-4 xl:hidden h-20">
              {/* PHONE */}
              <div
                className="relative"
                ref={activePopover === "phone" ? popoverRef : null}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePopover(
                      activePopover === "phone" ? null : "phone",
                    );
                  }}
                  className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 transition"
                >
                  <Phone className="h-6 w-6" />
                </button>

                {activePopover === "phone" && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-70">
                    <button
                      onClick={() => {
                        window.location.href = "tel:+639XXXXXXXXX";
                        setActivePopover(null);
                      }}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Call Number
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("+639XXXXXXXXX");
                        setActivePopover(null);
                      }}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Copy Number
                    </button>
                  </div>
                )}
              </div>

              {/* EMAIL */}
              <div
                className="relative"
                ref={activePopover === "email" ? popoverRef : null}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePopover(
                      activePopover === "email" ? null : "email",
                    );
                  }}
                  className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 transition"
                >
                  <Mail className="h-6 w-6" />
                </button>

                {activePopover === "email" && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-70">
                    <button
                      onClick={() => {
                        window.location.href = "mailto:info@boundlesslimo.com";
                        setActivePopover(null);
                      }}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Send Email
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("info@boundlesslimo.com");
                        setActivePopover(null);
                      }}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Copy Email
                    </button>
                  </div>
                )}
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 transition"
              >
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
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg xl:hidden">
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
                About Us
              </Link>
              <Link onClick={() => setIsMobileOpen(false)} to="/blog">
                Blog
              </Link>
              <Link onClick={() => setIsMobileOpen(false)} to="/contact">
                Contact Us
              </Link>

              <Link
                onClick={() => setIsMobileOpen(false)}
                to="/booking"
                className="bg-secondary text-black px-5 py-2 rounded font-semibold hover:opacity-90 transition items-center justify-center flex"
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
