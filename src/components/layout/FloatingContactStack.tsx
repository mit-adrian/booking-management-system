import { Phone, Mail } from "lucide-react";

export default function FloatingContactStack() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Call */}
      <a
        href="tel:+19787066226"
        className="
          bg-secondary text-white
          p-4 rounded-full
          shadow-lg
          hover:scale-105
          transition
        "
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:reservations@boundlesslimousine.com"
        className="
          bg-primary text-white
          p-4 rounded-full
          shadow-lg
          hover:scale-105
          transition
        "
        aria-label="Email us"
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
}
