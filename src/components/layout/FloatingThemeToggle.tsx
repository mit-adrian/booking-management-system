import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        fixed bottom-6 left-6 z-50
        p-3 rounded-full
        bg-white dark:bg-slate-800
        shadow-lg
        border border-border
        transition-all duration-300
        hover:scale-105
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
}
