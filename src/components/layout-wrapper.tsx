"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./theme-provider";
import { SiteHeader } from "./site-header";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center font-sans">
        <div className="flex items-center gap-2.5">
          <div className="h-4 w-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
          <span className="text-sm font-semibold tracking-wide text-zinc-650">Booting AIRO OS...</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative flex flex-col min-h-screen bg-white text-zinc-900">
        {/* Navigation Header */}
        <SiteHeader />
        
        {/* Page Main Content */}
        <div className="flex-grow">{children}</div>
      </div>
    </ThemeProvider>
  );
}
