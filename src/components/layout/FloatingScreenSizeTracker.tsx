import { useScreenSize } from "@/hooks/screenSizeTracker";

export default function FloatingScreenSizeTracker() {
  const { width, height, breakpoint } = useScreenSize();

  // Only show in development
  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white text-xs px-4 py-2 rounded-md shadow-lg z-9999 pointer-events-none font-mono">
      {width} × {height} | {breakpoint}
    </div>
  );
}
