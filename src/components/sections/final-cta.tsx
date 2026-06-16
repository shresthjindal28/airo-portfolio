"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function FinalCTASection() {
  const [demoEmail, setDemoEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleDemoRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "SaaS Lead",
          email: demoEmail,
          subject: "Demo Request from CTA Banner",
          message: `The user requested a demo at ${demoEmail}.`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setDemoEmail("");
        confetti({
          particleCount: 120,
          spread: 60,
          origin: { y: 0.8 },
        });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="py-32 bg-white relative overflow-hidden select-none border-b border-zinc-150/40">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="relative rounded-2xl bg-zinc-950 text-white py-20 px-8 md:px-16 text-center overflow-hidden shadow-2xl border border-zinc-900">
          
          {/* Immersive glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Get Started</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
                Ready to automate?
              </h2>
              <p className="text-sm text-zinc-450 leading-relaxed font-light">
                Join clinical practices saving over 10 hours of dictation every week. Start your free trial or request a demo call.
              </p>
            </div>

            {/* Email form */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  disabled={status === "loading"}
                  placeholder="dr.lin@clinic.com"
                  className="flex-grow px-4 py-3 rounded-lg text-xs bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-blue-500 transition-colors placeholder-zinc-500"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 rounded-lg bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shrink-0"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-zinc-900/30 border-t-zinc-900 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Request Demo</span>
                    </>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg mt-4 text-left justify-center"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Demo request received. We will email you within 2 hours.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg mt-4 text-left justify-center"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Error sending request. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
