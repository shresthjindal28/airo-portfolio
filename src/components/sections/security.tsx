"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Activity, Eye, ShieldAlert } from "lucide-react";
import { securityFeatures } from "@/lib/content";

export function SecuritySection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const getSecurityIcon = (title: string) => {
    switch (title) {
      case "End-to-End Encryption":
        return <Lock className="h-5 w-5 text-blue-400" />;
      case "Isolated Data Nodes":
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      case "Granular Permissions":
        return <Eye className="h-5 w-5 text-indigo-400" />;
      case "Immutable Auditing":
        return <Activity className="h-5 w-5 text-teal-400" />;
      default:
        return <ShieldAlert className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="security" className="py-32 bg-zinc-950 text-zinc-400 relative overflow-hidden select-none border-b border-zinc-900">
      {/* Visual flare */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Certifications and Trust Text */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Security</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                Patient data is fully isolated.
              </h2>
              <p className="text-sm text-zinc-450 leading-relaxed font-light">
                We sign Business Associate Agreements (BAAs) with every practice. AIRO meets or exceeds HIPAA regulations to guarantee strict clinical privacy.
              </p>
            </div>

            {/* Badges List */}
            <div className="space-y-3 pt-4 border-t border-zinc-900">
              <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>TLS 1.3 & AES-256 Encryption</span>
              </div>
            </div>
          </div>

          {/* Right Column: Security Features List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
            {securityFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-4">
                  {getSecurityIcon(feat.title)}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
