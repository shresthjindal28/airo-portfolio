"use client";

import React from "react";
import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/content";
import { ArrowRight, Mic, Cpu, CheckSquare, RefreshCw } from "lucide-react";

export function HowItWorksSection() {
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

  const getStepIcon = (stepNum: string) => {
    switch (stepNum) {
      case "01":
        return <Mic className="h-5 w-5 text-[#428475]" />;
      case "02":
        return <Cpu className="h-5 w-5 text-[#428475]" />;
      case "03":
        return <CheckSquare className="h-5 w-5 text-[#428475]" />;
      case "04":
        return <RefreshCw className="h-5 w-5 text-[#428475]" />;
      default:
        return <Mic className="h-5 w-5 text-[#428475]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-32 bg-zinc-50/20 relative overflow-hidden select-none border-b border-zinc-150/40">
      <div className="container px-4 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#428475]">Workflow</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
            Seamless from visit to sign-off.
          </h2>
          <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed max-w-2xl">
            A simple, integrated documentation loop that works in the background of your patient visits.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal dotted line on desktop */}
          <div className="absolute top-[44px] left-[50px] right-[50px] h-0.5 border-t border-dashed border-zinc-200 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="flex flex-col items-start text-left relative group"
              >
                {/* Step Icon Indicator */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-zinc-150 shadow-sm flex items-center justify-center relative group-hover:border-[#428475]/30 transition-colors">
                    {getStepIcon(step.step)}
                    {/* Tiny Number Badge */}
                    <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-650 text-[10px] font-bold font-mono flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Arrow Indicator on Desktop (except last item) */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute left-[calc(100%-24px)] top-[26px] z-20 text-zinc-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
