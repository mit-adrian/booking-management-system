import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="bg-linear-to-r from-slate-900 to-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Side */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Experience Luxury Travel?
            </h2>

            <p className="mt-4 text-gray-400">
              Book your premium chauffeur service today and travel with comfort,
              elegance, and reliability.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/booking"
              className="bg-secondary text-black px-8 py-4 rounded font-semibold text-center hover:opacity-90 transition"
            >
              Book Now
            </Link>

            <a
              href="tel:+19787066226"
              className="flex items-center justify-center gap-2 border border-secondary text-secondary px-8 py-4 rounded font-semibold hover:bg-secondary hover:text-black transition"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
