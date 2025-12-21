"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <LucideMoon
        className="
          absolute h-4 w-4 rotate-90 scale-0 transition-transform
          dark:rotate-0 dark:scale-100
        "
      />
      <LucideSun
        className="
          h-4 w-4 rotate-0 scale-100 transition-all
          dark:-rotate-90 dark:scale-0
        "
      />
    </Button>
  );
};
