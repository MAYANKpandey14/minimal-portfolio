import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center",
        className
      )}
    >
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <span className="sr-only">Toggle theme</span>
        <div className="relative h-5 w-5">
          <Sun
            className={cn(
              "absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-500",
              isDark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 h-5 w-5 text-slate-700 dark:text-slate-200 transition-all duration-500",
              isDark
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            )}
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
