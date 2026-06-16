"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mic, 
  ShieldCheck, 
  Database, 
  Pill, 
  CalendarRange, 
  Activity, 
  ChevronRight, 
  Check, 
  AlertTriangle, 
  ArrowUpRight 
} from "lucide-react";

export function FeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="features" className="py-32 bg-zinc-50/30 relative overflow-hidden select-none border-b border-zinc-150/40">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#89D7B7]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#89D7B7]/10 blur-[130px] pointer-events-none" />

      <div className="container px-4 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#428475]">Features</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
            Documentation, structured in real-time.
          </h2>
          <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed max-w-2xl">
            Aevomed automatically captures, structures, and synchronizes clinical notes directly into your existing EMR system.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Row 1 - Card 1: Large SOAP Diff (Col span 2) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-[#428475] uppercase tracking-wider block mb-1">SOAP Generation</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Instant SOAP Note Drafting</h3>
              <p className="text-xs text-zinc-500 max-w-lg mb-6 leading-relaxed">
                Converts verbal visits into perfectly formatted SOAP draft fields in seconds.
              </p>
            </div>
            
            {/* High-Fidelity Product UI: Diff Comparison */}
            <div className="border border-zinc-150/80 rounded-xl bg-white overflow-hidden shadow-sm flex flex-col md:flex-row flex-grow min-h-[180px]">
              <div className="flex-1 p-4 bg-zinc-50/50 border-r border-zinc-150 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Patient Transcript</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 leading-relaxed font-mono italic">
                    "...my blood pressure has been running around 145 over 90. I've had some mild morning headaches but no chest pain. I missed my Lisinopril doses last weekend..."
                  </p>
                </div>
                <div className="text-[9px] text-zinc-400 font-medium pt-2">Ambient audio captured</div>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#89D7B7]" />
                    <span className="text-[9px] font-bold text-[#89D7B7] uppercase tracking-wider">Structured output</span>
                  </div>
                  <div className="space-y-1.5 text-[9px] text-zinc-700">
                    <div className="px-1.5 py-1 rounded bg-[#89D7B7]/10 border-l border-[#89D7B7] font-sans">
                      <strong>Subjective:</strong> Morning headaches, admits medication non-compliance.
                    </div>
                    <div className="px-1.5 py-1 rounded bg-zinc-50 font-sans">
                      <strong>Objective:</strong> BP 142/92. Lungs clear. No pedal edema.
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#89D7B7] font-semibold pt-2 border-t border-zinc-100">
                  <span>98.7% Accuracy</span>
                  <span className="flex items-center gap-0.5 text-zinc-400">Review <ChevronRight className="h-3 w-3" /></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 1 - Card 2: Audio Capture (Col span 1) */}
          <motion.div
            variants={cardVariants}
            className="p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-[#89D7B7] uppercase tracking-wider block mb-1">Ambient Capture</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Ambient Recording</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Captures patient conversations without manual dictation or keyboard typing.
              </p>
            </div>

            {/* Voice visualizer mockup */}
            <div className="border border-zinc-150/80 rounded-xl bg-white p-5 shadow-sm flex flex-col items-center justify-center space-y-4 flex-grow">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-red-150/40 opacity-75"></span>
                <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white relative shadow-md shadow-red-500/20">
                  <Mic className="h-4 w-4" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-zinc-800 tracking-wider uppercase block">Ambient Capture Active</span>
                <span className="text-[9px] font-mono text-zinc-400">03:42 • Transcribing...</span>
              </div>
              <div className="flex items-center gap-1 w-full justify-center">
                <div className="h-4 w-1 bg-red-500 rounded-full animate-pulse" />
                <div className="h-6 w-1 bg-red-400 rounded-full" />
                <div className="h-8 w-1 bg-red-500 rounded-full animate-pulse" />
                <div className="h-5 w-1 bg-red-400 rounded-full" />
                <div className="h-2 w-1 bg-red-300 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Row 2 - Card 3: Drug Interaction (Col span 1) */}
          <motion.div
            variants={cardVariants}
            className="p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">Analysis</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Prescription Sync</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Flags potential drug interactions and coordinates dosage orders.
              </p>
            </div>

            {/* Drug checker UI */}
            <div className="border border-zinc-150/80 rounded-xl bg-white p-4 shadow-sm space-y-3 flex-grow justify-center flex flex-col">
              <div className="p-2.5 rounded-lg border border-red-100 bg-red-50/50 flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-red-900 uppercase">Interaction Warning</div>
                  <p className="text-[9px] text-red-750 font-medium leading-normal mt-0.5">Metformin + Contrast Agent: risk of lactic acidosis. Hold Metformin for 48h post-scan.</p>
                </div>
              </div>
              
              <div className="p-2.5 rounded-lg border border-[#89D7B7]/20 bg-[#89D7B7]/10 flex items-start gap-2.5">
                <Check className="h-4 w-4 text-[#89D7B7] shrink-0 mt-0.5" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-[#89D7B7] uppercase">Compatible</div>
                  <p className="text-[9px] text-[#89D7B7] font-medium leading-normal mt-0.5">Lisinopril + Cetirizine: No clinical interaction detected.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 2 - Card 4: Longitudinal History (Col span 2) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-[#89D7B7] uppercase tracking-wider block mb-1">Operations</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Longitudinal Patient Feed</h3>
              <p className="text-xs text-zinc-500 max-w-lg mb-6 leading-relaxed">
                Organizes history, visit files, and vital logs into a chronological scrollable timeline.
              </p>
            </div>

            {/* Patient timeline UI */}
            <div className="border border-zinc-150/80 rounded-xl bg-white p-4 shadow-sm flex-grow overflow-hidden flex flex-col justify-between min-h-[180px]">
              <div className="relative pl-6 space-y-4 border-l border-zinc-100 py-1 text-left">
                {/* Event 1 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 h-2 w-2 rounded-full bg-[#89D7B7] ring-4 ring-white" />
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-zinc-450 uppercase">June 12, 2026</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 font-semibold">Acute Bronchitis</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 font-normal leading-normal mt-1">
                    Ambient SOAP note compiled by Dr. Sarah Lin. Prescribed Cetirizine 10mg PO hs.
                  </p>
                </div>
                
                {/* Event 2 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 h-2 w-2 rounded-full bg-zinc-400 ring-4 ring-white" />
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-zinc-450 uppercase">April 05, 2026</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 font-semibold">Hypertension Follow-Up</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 font-normal leading-normal mt-1">
                    BP stable at 128/82. Patient reports improved adherence to Lisinopril schedule.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[9px] text-zinc-400 font-semibold mt-2">
                <span>Timeline includes 8 past consultations</span>
                <span className="flex items-center gap-0.5 text-[#428475] font-bold cursor-pointer">Open File <ArrowUpRight className="h-3 w-3" /></span>
              </div>
            </div>
          </motion.div>

          {/* Row 3 - Card 5: Compliance (Col span 1) */}
          <motion.div
            variants={cardVariants}
            className="p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-[#428475] uppercase tracking-wider block mb-1">Security</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">HIPAA Compliance</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Full legal BAA sign-offs, SOC2 Type II controls, and end-to-end data isolation.
              </p>
            </div>

            {/* Security badge UI */}
            <div className="border border-zinc-150/80 rounded-xl bg-zinc-50/50 p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-4 flex-grow">
              <div className="h-12 w-12 rounded-full bg-[#89D7B7]/10 border border-[#89D7B7]/20 flex items-center justify-center text-[#428475] shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-zinc-800 uppercase tracking-wider">SOC2 Type II</div>
                <div className="text-[10px] text-[#89D7B7] font-bold bg-[#89D7B7]/10 border border-[#89D7B7]/20 rounded-full px-3 py-0.5">100% Isolated Nodes</div>
              </div>
              <p className="text-[9px] text-zinc-450 leading-relaxed font-light">
                Encrypted at rest with AES-256. Fully auditable access log.
              </p>
            </div>
          </motion.div>

          {/* Row 3 - Card 6: EHR Sync (Col span 2) */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 bento-card flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Integrations</span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Instant EHR Sync</h3>
              <p className="text-xs text-zinc-500 max-w-lg mb-6 leading-relaxed">
                Integrates natively with major EMR/EHR providers to write consultation entries in one click.
              </p>
            </div>

            {/* EHR connection status UI */}
            <div className="border border-zinc-150/80 rounded-xl bg-white p-4 shadow-sm flex-grow flex flex-col justify-center gap-3 min-h-[180px]">
              <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-55/30 hover:border-zinc-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-[#89D7B7]/10 border border-[#89D7B7]/30 flex items-center justify-center font-bold text-xs text-[#428475] font-mono">Ep</div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-zinc-800">Epic Systems Integration</span>
                    <span className="text-[9px] font-mono text-[#89D7B7] block">Connected & Active</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-zinc-400">Synced 10s ago</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-55/30 hover:border-zinc-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-[#89D7B7]/10 border border-[#89D7B7]/30 flex items-center justify-center font-bold text-xs text-[#428475] font-mono">Ce</div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-zinc-800">Oracle Cerner EHR</span>
                    <span className="text-[9px] font-mono text-[#89D7B7] block">Connected & Active</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-zinc-400">Synced 2m ago</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
