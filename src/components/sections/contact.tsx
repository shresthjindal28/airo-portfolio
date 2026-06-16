"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import { developerInfo } from "@/lib/content";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Burst confetti on success
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Could not send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/20 border-t border-zinc-900">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Connection</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans mt-2 tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-zinc-500 mt-2 font-normal">
            Whether it&apos;s a full-time position, a contract role, or an AI consultation — drop a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Details Info card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-md glass hover:border-zinc-800 transition-all duration-300">
              <h3 className="font-bold text-zinc-100 mb-6 font-sans tracking-wide text-sm">
                Developer Contact Card
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Address</h4>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-sm font-semibold text-zinc-200 hover:text-teal-400 transition-colors mt-1 block"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-1">
                      New Delhi, India (Available for remote/hybrid)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-md glass text-xs text-zinc-500 leading-relaxed font-light">
              <p>
                * Submitting the form triggers a mock API route and runs a high-performance visual confetti solver on client-side React hooks.
              </p>
            </div>
          </div>

          {/* Contact Form card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-zinc-900 bg-zinc-900/10 backdrop-blur-md glass">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 mb-2">
                      Your Name <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg text-sm text-zinc-100 outline-none glass-input"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 mb-2">
                      Email Address <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg text-sm text-zinc-100 outline-none glass-input"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-zinc-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-lg text-sm text-zinc-100 outline-none glass-input"
                    placeholder="Project Proposal / Employment Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 mb-2">
                    Your Message <span className="text-teal-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-lg text-sm text-zinc-100 outline-none resize-none glass-input"
                    placeholder="Tell me about your project, timeline, or open role..."
                  />
                </div>

                {/* Feedback banners */}
                {status === "success" && (
                  <div className="flex items-center gap-2.5 p-4 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm animate-fadeIn">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2.5 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-fadeIn">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-98 shadow-[0_4px_15px_rgba(13,148,136,0.2)]"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-4.5 w-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
