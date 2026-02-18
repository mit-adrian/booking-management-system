import { Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import sedan from "@/assets/fleet-images/sedan2.png";
import suv from "@/assets/fleet-images/premium-suv4.png";
import limo from "@/assets/fleet-images/stretch-limo.png";

const fleet = [
  {
    name: "Luxury Sedan",
    image: sedan,
    passengers: "3 Passengers",
    luggage: "3 Luggage",
  },
  {
    name: "Premium SUV",
    image: suv,
    passengers: "6 Passengers",
    luggage: "6 Luggage",
  },
  {
    name: "Stretch Limousine",
    image: limo,
    passengers: "8–10 Passengers",
    luggage: "6 Luggage",
  },
];

export default function FleetPreviewSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Luxury Fleet
          </h2>
          <p className="mt-4 text-gray-400">
            A selection of premium vehicles tailored for comfort and elegance.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-white text-xl font-semibold">
                  {vehicle.name}
                </h3>

                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    {vehicle.passengers}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    {vehicle.luggage}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/fleet"
            className="inline-block bg-secondary text-black px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}
