import { Shield, Clock, UserCheck, Car, BadgeCheck, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Reliable service anytime, day or night.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified and compliant for your peace of mind.",
  },
  {
    icon: UserCheck,
    title: "Professional Chauffeurs",
    description: "Experienced, courteous, and highly trained drivers.",
  },
  {
    icon: Car,
    title: "Modern Fleet",
    description: "Luxury vehicles maintained to the highest standards.",
  },
  {
    icon: BadgeCheck,
    title: "On-Time Guarantee",
    description: "Punctual service you can depend on.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Exceptional comfort and first-class service.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose{" "}
            <span className="text-secondary">Boundless Limousine</span>?
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-justify">
            We are committed to delivering a luxury transportation experience
            defined by reliability, professionalism, and exceptional service.
            From airport transfers to special occasions, your comfort and safety
            are always our top priority.
          </p>
        </div>

        {/* Right Side Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex gap-4">
                <Icon className="w-6 h-6 text-secondary mt-1" />

                <div>
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
