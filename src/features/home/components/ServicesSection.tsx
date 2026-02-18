import { Plane, Briefcase, Heart, Clock, Car, Star } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable and punctual airport transportation available 24/7.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Professional chauffeur service for executives and business clients.",
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    description:
      "Luxury transportation for weddings, proms, and special occasions.",
  },
  {
    icon: Clock,
    title: "Hourly Chauffeur",
    description: "Flexible hourly service tailored to your schedule.",
  },
  {
    icon: Car,
    title: "Long Distance Travel",
    description: "Comfortable long-distance rides with premium vehicles.",
  },
  {
    icon: Star,
    title: "VIP Experience",
    description:
      "Exclusive, high-end travel experience for discerning clients.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Premium Services
          </h2>
          <p className="mt-4 text-gray-400">
            Luxury transportation solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-8 rounded-lg transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-secondary mb-6" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
