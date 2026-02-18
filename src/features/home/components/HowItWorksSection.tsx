import { CalendarCheck, Car, Smile } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Choose Your Service",
    description: "Select the type of transportation that suits your needs.",
  },
  {
    icon: Car,
    number: "02",
    title: "Select Your Vehicle",
    description: "Pick from our premium fleet tailored for comfort and style.",
  },
  {
    icon: Smile,
    number: "03",
    title: "Enjoy the Ride",
    description: "Sit back and experience first-class chauffeur service.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            Booking your luxury ride is simple and seamless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative group">
                <div className="relative bg-slate-950 border border-slate-800 p-10 rounded-lg text-center overflow-hidden">
                  {/* Background Number */}
                  <span className="absolute top-6 right-6 text-7xl font-bold text-slate-800 opacity-30 select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <Icon className="w-10 h-10 text-secondary mx-auto mb-6 relative z-10" />

                  <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {step.description}
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
