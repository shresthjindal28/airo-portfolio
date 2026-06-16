"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden select-none border-b border-zinc-150/40">
      <div className="container px-4 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Reviews</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
            Loved by practitioners.
          </h2>
          <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed max-w-2xl">
            See how doctors and clinical systems are reclaiming their patient focus and weekend time.
          </p>
        </div>

        {/* Grid Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-xl border border-zinc-150 bg-white hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Outcomes metadata */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded">
                    <Clock className="h-3 w-3" /> {test.timeSaved}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50/50 px-2 py-0.5 rounded">
                    <Check className="h-3 w-3" /> {test.accuracy}
                  </span>
                </div>

                <p className="text-zinc-700 leading-relaxed text-sm font-normal mb-6 text-left">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <div className="h-9 w-9 rounded-full bg-zinc-50 border border-zinc-150 flex items-center justify-center font-bold text-xs text-zinc-650">
                  {test.author.replace("Dr. ", "").charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-zinc-900">{test.author}</h4>
                  <p className="text-[10px] text-zinc-450 leading-normal font-medium">{test.role} • {test.facility}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
