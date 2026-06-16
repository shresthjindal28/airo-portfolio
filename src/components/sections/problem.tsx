"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProblemSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="problem" className="py-32 bg-white select-none border-b border-zinc-150/40 relative">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Split: Bold Direct Copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#428475]">The Problem</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
              Paperwork causes physician burnout.
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Doctors spend up to a third of their shifts typing SOAP forms and copy-pasting records, reducing face-to-face consultation times.
            </p>
            <div className="space-y-3 text-xs text-zinc-650 font-medium pt-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Manual note-taking breaks eye contact with patients.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Critical details are lost between consult and entry.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>EMR synchronization creates major administrative delays.</span>
              </div>
            </div>
          </div>

          {/* Right Split: Bento Grid Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Metric 1 (Large, full width span) */}
            <motion.div
              variants={cardVariants}
              className="sm:col-span-2 p-8 bento-card relative overflow-hidden"
            >
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Documentation overhead</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold font-sans text-zinc-900 tracking-tight">70% Less</span>
                <span className="text-xs font-bold text-zinc-450 uppercase">Time Spent</span>
              </div>
              <p className="text-xs text-zinc-500 mt-2 font-light">
                Clinical documentation time drops by more than two thirds, freeing up over 2 hours every day.
              </p>
            </motion.div>

            {/* Metric 2 (Small) */}
            <motion.div
              variants={cardVariants}
              className="p-6 bento-card"
            >
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">SOAP Generation</span>
              <div className="text-3xl font-extrabold text-[#428475] font-sans tracking-tight">2 Minutes</div>
              <p className="text-[11px] text-zinc-500 mt-2 font-light">
                Drafts are complete and ready for EMR export in under two minutes.
              </p>
            </motion.div>

            {/* Metric 3 (Small) */}
            <motion.div
              variants={cardVariants}
              className="p-6 bento-card"
            >
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Manual Typing</span>
              <div className="text-3xl font-extrabold text-[#89D7B7] font-sans tracking-tight">95% Cut</div>
              <p className="text-[11px] text-zinc-500 mt-2 font-light">
                Ambient recording eliminates almost all typing and copy-pasting during patient consultations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
