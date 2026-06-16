"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Plus } from "lucide-react";

export function TrustedSection() {
  const networks = [
    { name: "Apex Clinique", icon: <Plus className="h-4 w-4 text-zinc-400 mr-1" /> },
    { name: "Summit Health", icon: <Plus className="h-4 w-4 text-zinc-400 mr-1" /> },
    { name: "Mercy General", icon: <Plus className="h-4 w-4 text-zinc-400 mr-1" /> },
    { name: "Crestview Med", icon: <Plus className="h-4 w-4 text-zinc-400 mr-1" /> },
    { name: "Metro Care", icon: <Plus className="h-4 w-4 text-zinc-400 mr-1" /> },
  ];

  return (
    <section className="py-12 bg-zinc-50/50 border-y border-zinc-100 select-none">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest text-center">
            Trusted by healthcare professionals worldwide
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {networks.map((net, idx) => (
              <div
                key={idx}
                className="flex items-center text-zinc-400 text-sm font-bold tracking-tight select-none opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {net.icon}
                <span className="font-sans uppercase tracking-wider text-xs">{net.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
