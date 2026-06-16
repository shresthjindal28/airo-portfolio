// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, ArrowRight, Command, Sparkles, ShieldCheck, Waves, Circle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { href: "#features", label: "Features" },
//     { href: "#how-it-works", label: "How It Works" },
//     { href: "#security", label: "Security" },
//     { href: "#testimonials", label: "Testimonials" },
//     { href: "#pricing", label: "Pricing" },
//   ];

//   const statusItems = [
//     { label: "Live transcript", icon: Waves },
//     { label: "HIPAA ready", icon: ShieldCheck },
//   ];

//   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     setOpen(false);
//     e.preventDefault();
//     const id = href.replace("#", "");
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-40 px-3 sm:px-4 lg:px-6 transition-all duration-300 ${
//         scrolled ? "py-3" : "py-4"
//       }`}
//     >
//       <motion.div
//         initial={false}
//         animate={{
//           scale: scrolled ? 0.99 : 1,
//         }}
//         transition={{ duration: 0.25, ease: "easeOut" }}
//         className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
//           scrolled
//             ? "border-white/60 bg-white/85 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl"
//             : "border-white/40 bg-white/70 shadow-[0_10px_30px_-20px_rgba(15,111,255,0.25)] backdrop-blur-xl"
//         }`}
//       >
//         <div className="relative overflow-hidden rounded-2xl">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,111,255,0.12),transparent_42%),radial-gradient(circle_at_top_right,rgba(0,212,170,0.1),transparent_35%)] pointer-events-none" />
//           <div className="relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6">
//             <Link href="/" className="group flex items-center gap-3 shrink-0">
//               <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f6fff,#00d4aa)] text-white shadow-[0_18px_30px_-16px_rgba(15,111,255,0.75)]">
//                 <Sparkles className="h-5 w-5" />
//                 <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-400 pulse-dot" />
//               </div>
//               <div className="flex flex-col leading-tight">
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-400">AI Copilot</span>
//                 <span className="text-lg font-black tracking-[0.2em] text-zinc-900">AIRO</span>
//               </div>
//             </Link>

//             <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/60 bg-white/65 p-1 shadow-sm backdrop-blur-md">
//               {links.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={(e) => handleLinkClick(e, link.href)}
//                   className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-900 hover:text-white"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>

//             <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-4 py-2 text-[11px] font-semibold text-emerald-700">
//               <Circle className="h-2.5 w-2.5 fill-emerald-500 text-emerald-500" />
//               <span>Dictation live</span>
//               <span className="text-emerald-400">•</span>
//               <span>SOAP note preview ready</span>
//             </div>

//             <div className="hidden md:flex items-center gap-2">
//               <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-3.5 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-white">
//                 <Command className="h-3.5 w-3.5 text-zinc-500" />
//                 Cmd K
//               </button>
//               <button className="rounded-full px-3.5 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900">
//                 Login
//               </button>
//               <a
//                 href="#pricing"
//                 onClick={(e) => handleLinkClick(e, "#pricing")}
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4.5 py-2.5 text-xs font-bold text-white shadow-[0_14px_30px_-16px_rgba(15,23,42,0.95)] transition-transform hover:-translate-y-0.5"
//               >
//                 Start free trial
//                 <ArrowRight className="h-3.5 w-3.5" />
//               </a>
//             </div>

//             <button
//               onClick={() => setOpen((prev) => !prev)}
//               className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-900"
//               aria-label="Toggle menu"
//             >
//               {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </button>
//           </div>

//           <AnimatePresence>
//             {open && (
//               <motion.div
//                 initial={{ opacity: 0, y: -8, height: 0 }}
//                 animate={{ opacity: 1, y: 0, height: "auto" }}
//                 exit={{ opacity: 0, y: -8, height: 0 }}
//                 transition={{ duration: 0.22, ease: "easeOut" }}
//                 className="md:hidden border-t border-white/60 bg-white/92 backdrop-blur-xl overflow-hidden"
//               >
//                 <div className="px-4 py-4 space-y-4">
//                   <div className="grid grid-cols-2 gap-2">
//                     {statusItems.map((item) => {
//                       const Icon = item.icon;

//                       return (
//                         <div key={item.label} className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-700">
//                           <Icon className="h-4 w-4 text-blue-600" />
//                           <span>{item.label}</span>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <nav className="grid gap-2">
//                     {links.map((link) => (
//                       <a
//                         key={link.href}
//                         href={link.href}
//                         onClick={(e) => handleLinkClick(e, link.href)}
//                         className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//                       >
//                         <span>{link.label}</span>
//                         <ArrowRight className="h-4 w-4" />
//                       </a>
//                     ))}
//                   </nav>

//                   <div className="grid grid-cols-2 gap-2 pt-1">
//                     <button className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-700">
//                       Login
//                     </button>
//                     <a
//                       href="#pricing"
//                       onClick={(e) => handleLinkClick(e, "#pricing")}
//                       className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-bold text-white"
//                     >
//                       Start trial
//                       <ArrowRight className="h-4 w-4" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </header>
//   );
// }
import React from 'react'

export function SiteHeader() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#security", label: "Security" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ];
  return (
    <div className="fixed left-1/2 top-4 z-50 w-[90vw] -translate-x-1/2 px-4">
      <div className="rounded-full border bg-transparent shadow-sm backdrop-blur-lg ">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between px-8">
            <div className="text-xl font-bold text-zinc-900 bitcount-grid-double-900">
              Aevomed
            </div>
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-700 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button className="rounded-md bg-[#FFF4E1] px-4 py-2 text-sm font-semibold text-black ">
                Signin
              </button>
              <button className="rounded-md bg-[#428475] hover:bg-[#1A312C] px-4 py-2 text-sm font-semibold text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

