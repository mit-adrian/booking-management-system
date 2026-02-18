import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [activePopover, setActivePopover] = useState<"phone" | "email" | null>(
    null,
  );
  const popoverRef = useRef<HTMLDivElement | null>(null);

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
    <footer className="bg-[#1c1c1c] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-white font-semibold tracking-widest uppercase mb-6">
            Boundless <span className="text-secondary">Limousine</span>
          </h3>

          <p className="text-sm leading-relaxed text-gray-400 text-justify">
            We are proud to offer 24-hour customer service around the clock,
            making sure every detail of your reservation is accounted for. Going
            above and beyond is what makes us proud to serve you every day.
          </p>
        </div>

        {/* Column 2 - Quick Access */}
        <div>
          <h3 className="text-white font-semibold tracking-widest uppercase mb-6">
            Quick Access
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/fleet" className="hover:text-secondary">
                Our Fleet
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-secondary">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-secondary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-secondary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-secondary">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-white font-semibold tracking-widest uppercase mb-6">
            Contact Info
          </h3>

          <div className="space-y-5 text-sm">
            {/* PHONE */}
            <div
              className="relative"
              ref={activePopover === "phone" ? popoverRef : null}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePopover(activePopover === "phone" ? null : "phone");
                }}
                className="flex items-center gap-3 hover:text-secondary"
              >
                <Phone size={16} />
                (978) 706-6226
              </button>

              {activePopover === "phone" && (
                <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-60">
                  <button
                    onClick={() => {
                      window.location.href = "tel:+19787066226";
                      setActivePopover(null);
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    Call Number
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("+19787066226");
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
                  setActivePopover(activePopover === "email" ? null : "email");
                }}
                className="flex items-center gap-3 hover:text-secondary"
              >
                <Mail size={16} />
                info@boundlesslimo.com
              </button>

              {activePopover === "email" && (
                <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded shadow-lg p-2 text-sm z-60">
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
          </div>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-white font-semibold tracking-widest uppercase mb-6">
            Follow Us
          </h3>

          <div className="flex gap-5">
            <a href="#" className="hover:text-secondary">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-secondary">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-secondary">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 text-center space-y-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Boundless Limousine, Inc. All rights
            reserved.
          </p>

          <div className="text-xs text-gray-500 flex items-center justify-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-secondary transition"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-600">|</span>

            <Link
              to="/terms-of-service"
              className="hover:text-secondary transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
