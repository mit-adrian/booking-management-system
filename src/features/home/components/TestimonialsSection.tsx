import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Corporate Client",
    text: "Outstanding service from start to finish. The chauffeur was punctual, professional, and the vehicle was immaculate.",
  },
  {
    name: "Samantha L.",
    role: "Wedding Client",
    text: "Our wedding transportation was flawless. The limousine was beautiful and the experience felt truly luxurious.",
  },
  {
    name: "David T.",
    role: "Airport Transfer",
    text: "Reliable, smooth, and stress-free airport ride. Highly recommended for anyone seeking premium service.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-400">
            Trusted by individuals and businesses for exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-secondary fill-secondary"
                  />
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                “{testimonial.text}”
              </p>

              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <span className="text-gray-500 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
