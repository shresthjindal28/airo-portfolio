"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/content";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const comparisonFeatures = [
    { name: "HIPAA / BAA Agreements", starter: true, professional: true, enterprise: true },
    { name: "Real-time Voice Transcription", starter: true, professional: true, enterprise: true },
    { name: "SOAP Note Templates", starter: "Standard", professional: "Customizable", enterprise: "Unlimited Bespoke" },
    { name: "Prescription Interaction checks", starter: false, professional: true, enterprise: true },
    { name: "Direct EMR Integration", starter: false, professional: false, enterprise: "Epic / Cerner APIs" },
    { name: "Support Response SLA", starter: "24h email", professional: "Under 1h priority", enterprise: "24/7 Phone & Dedicated" },
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-50/20 relative overflow-hidden select-none border-b border-zinc-150/40">
      <div className="container px-4 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Pricing</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
              Simple, flat pricing.
            </h2>
            <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed">
              Start free and scale as your clinical volume grows. Save 20% with annual commitments.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-zinc-100 border border-zinc-200 self-start">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                billingCycle === "monthly" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "annually" ? "bg-white text-blue-600 shadow-sm" : "text-zinc-500"
              }`}
            >
              <span>Annually</span>
              <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan) => {
            const price = billingCycle === "annually" ? plan.priceAnnually : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`p-8 rounded-xl border flex flex-col justify-between transition-all duration-300 bg-white relative text-left ${
                  plan.highlighted
                    ? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
                    : "border-zinc-150 hover:border-zinc-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest shadow-sm">
                    Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 font-light">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold tracking-tight text-zinc-900">${price}</span>
                    <span className="text-xs text-zinc-400">/ month</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs font-light border-t border-zinc-100 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-zinc-650">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-98 ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-sm"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Collapsible Feature Comparison */}
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => setIsCompareOpen(!isCompareOpen)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-555 hover:text-zinc-800 transition-colors uppercase tracking-wider py-3 px-6 rounded-lg border border-zinc-150 bg-white hover:bg-zinc-50/50 cursor-pointer"
          >
            <span>{isCompareOpen ? "Hide detailed comparison" : "Compare all capabilities"}</span>
            {isCompareOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          <AnimatePresence>
            {isCompareOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mt-8 text-left"
              >
                <div className="border border-zinc-150 rounded-xl overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50/50 border-b border-zinc-150">
                        <th className="p-4 font-bold text-zinc-800">Capability</th>
                        <th className="p-4 font-bold text-zinc-800 text-center">Starter</th>
                        <th className="p-4 font-bold text-zinc-800 text-center">Professional</th>
                        <th className="p-4 font-bold text-zinc-800 text-center">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {comparisonFeatures.map((item, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50/20 transition-colors">
                          <td className="p-4 font-semibold text-zinc-800">{item.name}</td>
                          <td className="p-4 text-center">
                            {typeof item.starter === "boolean" ? (
                              item.starter ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <span className="text-zinc-300 font-light">—</span>
                            ) : (
                              <span className="text-zinc-650 font-normal">{item.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.professional === "boolean" ? (
                              item.professional ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <span className="text-zinc-300 font-light">—</span>
                            ) : (
                              <span className="text-zinc-900 font-bold">{item.professional}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.enterprise === "boolean" ? (
                              item.enterprise ? <Check className="h-4 w-4 text-blue-600 mx-auto" /> : <span className="text-zinc-300 font-light">—</span>
                            ) : (
                              <span className="text-zinc-900 font-bold">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
