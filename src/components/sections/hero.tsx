"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Activity, ShieldCheck, Database, Check } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const floatAnimation = (delay: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-36 pb-28 overflow-hidden bg-white select-none border-b border-zinc-150/40">
      {/* Soft background radial flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[750px] rounded-full bg-blue-50/40 blur-[130px] pointer-events-none" />

      <div className="container relative z-10 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Eyebrow notification */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100/50 bg-blue-50/50 text-blue-600 text-[11px] font-semibold">
            <span className="relative flex h-1.5 w-1.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            HIPAA-Compliant Dictation Engine
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-sans text-zinc-900 tracking-tight leading-[1.08]"
          >
            Finish charting before the patient leaves.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Aevomed captures patient consultations, drafts detailed SOAP notes, and updates EMR logs in real-time. No typing required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleScrollTo("pricing")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-500 shadow-md shadow-blue-500/10 active:scale-98 transition-all cursor-pointer"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleScrollTo("contact-form")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-bold text-xs uppercase tracking-wider hover:border-zinc-300 hover:bg-zinc-50 active:scale-98 transition-all cursor-pointer"
            >
              Request Personal Demo
            </button>
          </motion.div>

          {/* Outcomes checklist */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 text-[11px] text-zinc-400 font-semibold pt-4">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" /> BAA Agreements Signed
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" /> 70% Time Savings
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" /> SOC2 Type II Certified
            </span>
          </motion.div>

          {/* Full-width Dashboard Workspace Preview */}
          <motion.div
            variants={itemVariants}
            className="relative mt-20 w-full max-w-5xl mx-auto rounded-2xl border border-zinc-200 bg-white/70 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col pt-1"
          >
            {/* Header window control buttons */}
            <div className="h-10 border-b border-zinc-150/60 bg-zinc-50/50 px-4 flex items-center gap-1.5 shrink-0">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <span className="ml-4 text-[10px] text-zinc-400 font-mono">app.aevomed.md/clinician-dashboard</span>
            </div>

            {/* Dashboard Mock Content Layout */}
            <div className="flex flex-col md:flex-row h-[320px] md:h-[400px] text-left bg-white">
              {/* Sidebar Mock */}
              <div className="w-full md:w-56 border-r border-zinc-150 p-4 space-y-6 bg-zinc-50/30">
                <div className="h-4 w-24 rounded bg-zinc-200" />
                <div className="space-y-2.5">
                  <div className="h-8 w-full rounded-lg bg-blue-50 text-blue-600 border border-blue-100/50 flex items-center px-3 gap-2.5 text-xs font-bold">
                    <Activity className="h-4 w-4" /> Live Consult
                  </div>
                  <div className="h-8 w-full rounded-lg hover:bg-zinc-100 flex items-center px-3 gap-2.5 text-xs text-zinc-400 font-bold">
                    <Database className="h-4 w-4" /> Patient Files
                  </div>
                  <div className="h-8 w-full rounded-lg hover:bg-zinc-100 flex items-center px-3 gap-2.5 text-xs text-zinc-400 font-bold">
                    <ShieldCheck className="h-4 w-4" /> Security Log
                  </div>
                </div>
              </div>

              {/* Main detail page Mock */}
              <div className="flex-grow p-6 flex flex-col md:flex-row gap-6">
                {/* Transcript mock */}
                <div className="flex-1 flex flex-col justify-between border border-zinc-200 rounded-xl p-4 bg-zinc-50/10">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest border-b pb-2 mb-3 block">
                    Patient Consultation Feed
                  </span>
                  <div className="space-y-3 flex-grow overflow-y-auto text-xs text-zinc-700 pr-1">
                    <p className="p-2 rounded-lg bg-blue-50/50 text-blue-900 border-l border-blue-500">
                      Doctor: I suspect a mild viral bronchitis. I want you to rest.
                    </p>
                    <p className="p-2 rounded-lg bg-zinc-100 text-zinc-850">
                      Patient: Understood. Cetirizine at bedtime?
                    </p>
                    <p className="p-2 rounded-lg bg-blue-50/50 text-blue-900 border-l border-blue-500">
                      Doctor: Yes, Cetirizine 10mg daily to manage the dry cough.
                    </p>
                  </div>
                </div>

                {/* AI Document mock */}
                <div className="flex-1 flex flex-col justify-between border border-zinc-200 rounded-xl p-4 bg-zinc-50/10">
                  <span className="text-[10px] font-bold text-zinc-450 uppercase tracking-widest border-b pb-2 mb-3 block">
                    AI SOAP Note Output
                  </span>
                  <div className="space-y-2 flex-grow overflow-y-auto text-[11px] text-zinc-700">
                    <p><strong>Subjective:</strong> Cough x 5 days, dry. Fever resolved.</p>
                    <p><strong>Objective:</strong> Chest examination shows normal breath sounds.</p>
                    <p><strong>Assessment:</strong> Acute viral bronchitis suspected.</p>
                    <p><strong>Plan:</strong> Rest, hydration. Cetirizine 10mg PO daily hs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating realistic cards around mockup */}
            {/* Tag 1: SOAP Formed */}
            <motion.div
              animate={floatAnimation(0.2)}
              className="absolute -top-10 -left-6 hidden lg:flex items-center gap-3 p-4 rounded-xl border border-zinc-200/60 bg-white shadow-xl w-52"
            >
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <FileText className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">AI Analysis</p>
                <p className="text-xs font-bold text-zinc-800">SOAP Note Drafted</p>
              </div>
            </motion.div>

            {/* Tag 2: EHR Updated */}
            <motion.div
              animate={floatAnimation(1.8)}
              className="absolute -bottom-10 -right-6 hidden lg:flex items-center gap-3 p-4 rounded-xl border border-zinc-200/60 bg-white shadow-xl w-52"
            >
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Check className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">EHR Status</p>
                <p className="text-xs font-bold text-zinc-800">Records Synchronized</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
