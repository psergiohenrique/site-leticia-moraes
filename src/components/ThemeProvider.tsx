"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "escuro") {
      document.documentElement.setAttribute("data-theme", "escuro");
    }
  }, []);

  return <>{children}</>;
}
