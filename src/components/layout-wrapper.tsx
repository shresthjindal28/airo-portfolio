"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./theme-provider";
import { SiteHeader } from "@/components/site-header";
import { BrandLogo } from "./brand-logo";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <BrandLogo variant="horizontal-light" className="inline-flex" imageClassName="h-auto w-[160px]" priority />
          <div className="h-4 w-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
          <span className="text-sm font-semibold tracking-wide text-zinc-650">Booting Aevomed OS...</span>
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
