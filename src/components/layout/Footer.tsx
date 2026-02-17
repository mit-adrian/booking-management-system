import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-white font-semibold tracking-widest uppercase mb-6">
            Boundless <span className="text-yellow-500">Limousine</span>
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
            <a
              href="tel:+19787066226"
              className="flex items-center gap-3 hover:text-secondary"
            >
              <Phone size={16} />
              (978) 706-6226
            </a>

            <a
              href="mailto:info@boundlesslimo.com"
              className="flex items-center gap-3 hover:text-secondary"
            >
              <Mail size={16} />
              info@boundlesslimo.com
            </a>
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 text-center">
          <p className="text-sm text-gray-500">
            All Rights Reserved. © 2026 Boundless Limousine, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
