"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#security", label: "Security" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <div className="fixed left-1/2 top-3 z-50 w-[min(94vw,72rem)] -translate-x-1/2 px-2 sm:top-4 sm:px-4">
      <div className="rounded-2xl border border-zinc-200/70 bg-white/90 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:rounded-full">
        <div className="mx-auto px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <BrandLogo
              variant="icon-only"
              priority
              showText
              className="shrink-0"
              imageClassName="h-8 w-8 sm:h-9 sm:w-9"
            />

            <nav className="hidden items-center space-x-6 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-700 transition-colors hover:text-[#428475]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center space-x-4 md:flex">
              <button className="rounded-md bg-[#FFF4E1] px-4 py-2 text-sm font-semibold text-black">
                Signin
              </button>
              <button className="rounded-md bg-[#428475] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1A312C]">
                Get Started
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-50 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="mt-4 space-y-4 border-t border-zinc-200 pt-4 md:hidden">
              <nav className="grid gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="grid gap-2 sm:grid-cols-2">
                <button className="rounded-xl border border-zinc-200 bg-[#FFF4E1] px-4 py-3 text-sm font-semibold text-black">
                  Signin
                </button>
                <button className="rounded-xl bg-[#428475] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1A312C]">
                  Get Started
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
