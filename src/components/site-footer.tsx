"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Security & Trust", href: "#security" },
        { label: "Pricing Options", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Aevomed", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Contact Us", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Platform FAQs", href: "#faq" },
        { label: "HIPAA Guidelines", href: "#security" },
        { label: "Developer APIs", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "BAA Agreement", href: "#" },
        { label: "Data Security", href: "#security" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Info column */}
          <div className="col-span-2 space-y-4">
            <BrandLogo
              href="/"
              variant="horizontal-dark"
              className="inline-flex"
              imageClassName="h-auto w-[150px]"
              priority
            />
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm font-light">
              Aevomed is a world-class, HIPAA-compliant clinical intelligence platform automating documentation and patient workflows for clinics, independent practitioners, and enterprise hospitals.
            </p>
            <div className="flex items-center gap-4 text-zinc-500 pt-2">
              <a
                href="https://github.com/shresthjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/shresthjindal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href="mailto:jindalshresth@gmail.com" className="hover:text-blue-500 transition-colors" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">{col.title}</h4>
              <ul className="space-y-2.5 text-xs">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {col.title === "Product" || link.href.startsWith("#") ? link.label : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-zinc-600 font-light">
            © {currentYear} Aevomed. All rights reserved. Clinical intelligence platform.
          </p>
          <div className="flex items-center gap-5 text-[11px] text-zinc-600">
            <span>HIPAA Compliant</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SOC2 Type II</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
