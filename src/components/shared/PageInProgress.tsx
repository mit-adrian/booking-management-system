import { Link } from "react-router-dom";

interface PageInProgressProps {
  title: string;
}

export default function PageInProgress({ title }: PageInProgressProps) {
  return (
    <section className="bg-slate-950 min-h-[70vh] flex items-center justify-center py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>

        <div className="w-24 h-0.5 bg-secondary mx-auto my-6" />

        <p className="text-gray-400 text-lg leading-relaxed">
          This section is currently being refined to deliver a premium
          experience. We are working behind the scenes to bring you something
          exceptional.
        </p>

        <div className="mt-10">
          <Link
            to="/booking"
            className="inline-block bg-secondary text-black px-8 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Book Your Ride Now
          </Link>
        </div>
      </div>
    </section>
  );
}
