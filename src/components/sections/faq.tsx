"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden select-none border-b border-zinc-150/40">
      <div className="container px-4 max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Support</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
            Common questions.
          </h2>
          <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed">
            Everything you need to know about HIPAA compliance, EHR sync, and setup.
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-zinc-150 bg-white overflow-hidden transition-colors duration-200"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-zinc-800 hover:text-blue-600 cursor-pointer select-none"
                >
                  <span className="font-sans tracking-tight">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                  )}
                </button>

                {/* Animated Body content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-zinc-100 text-xs text-zinc-500 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
