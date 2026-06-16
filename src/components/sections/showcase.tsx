"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  ClipboardList, 
  Activity, 
  Settings, 
  Play, 
  Square, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  ShieldCheck,
  ChevronRight,
  Heart,
  UserCheck
} from "lucide-react";

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"patients" | "visits" | "consultations" | "settings">("consultations");
  
  // States for active consultation simulation
  const [stage, setStage] = useState<"idle" | "recording" | "processing" | "completed">("idle");
  const [transcriptLines, setTranscriptLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const mockTranscript = [
    "Doctor: Hello, how are you feeling today?",
    "Patient: I've had a persistent dry cough for about five days, and a slight fever of 99.4.",
    "Doctor: Okay. Any shortness of breath or chest tightness?",
    "Patient: No shortness of breath. Just feeling fatigued and some mild muscle aches.",
    "Doctor: Lungs sound clear. I suspect a mild viral bronchitis. Rest and take Cetirizine 10mg daily.",
  ];

  // Simulation effect
  useEffect(() => {
    let timer: any;
    if (stage === "recording") {
      let lineIndex = 0;
      timer = setInterval(() => {
        if (lineIndex < mockTranscript.length) {
          setTranscriptLines((prev) => [...prev, mockTranscript[lineIndex]]);
          lineIndex++;
        } else {
          setStage("processing");
          clearInterval(timer);
        }
      }, 1800);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [stage]);

  useEffect(() => {
    let timer: any;
    if (stage === "processing") {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setStage("completed");
            return 100;
          }
          return prev + 25;
        });
      }, 350);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [stage]);

  const startSimulation = () => {
    setStage("recording");
    setTranscriptLines([]);
    setProgress(0);
  };

  const resetSimulation = () => {
    setStage("idle");
    setTranscriptLines([]);
    setProgress(0);
  };

  const patientList = [
    { name: "Eleanor Vance", age: "42", history: "Hypertension, Asthma", lastVisit: "June 02, 2026" },
    { name: "John Sterling", age: "58", history: "Type-2 Diabetes, Hyperlipidemia", lastVisit: "May 28, 2026" },
    { name: "Aria Patel", age: "29", history: "None", lastVisit: "March 15, 2026" },
  ];

  const queueList = [
    { room: "Room 101", patient: "Eleanor Vance", status: "Active Consult", time: "10 mins" },
    { room: "Room 102", patient: "John Sterling", status: "Waiting", time: "15 mins" },
    { room: "Room 105", patient: "Aria Patel", status: "Ready", time: "5 mins" },
  ];

  return (
    <section id="showcase" className="py-32 relative overflow-hidden bg-white select-none border-b border-zinc-150/40">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/20 blur-[120px] pointer-events-none" />

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Product Tour</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 leading-[1.1]">
            Designed for clinical clarity.
          </h2>
          <p className="text-zinc-500 mt-4 font-normal text-sm sm:text-base leading-relaxed max-w-2xl">
            Experience the automated dashboard interface clinicians use daily. Click tabs or start the live consultation simulation below.
          </p>
        </div>

        {/* Browser Mock Wrapper */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-150/80 bg-zinc-50/20 shadow-xl overflow-hidden flex flex-col pt-1">
          {/* Header window control buttons */}
          <div className="h-11 border-b border-zinc-150/80 bg-zinc-50/40 px-4 flex items-center gap-1.5 shrink-0 justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
              <span className="ml-4 text-[10px] text-zinc-400 font-mono">dashboard.airo.md/clinician</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-zinc-400 font-mono font-medium">Syncing with Epic</span>
            </div>
          </div>

          {/* Workspace Body */}
          <div className="flex flex-col md:flex-row min-h-[500px] bg-white text-left">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 border-r border-zinc-150/80 p-4 flex flex-col justify-between shrink-0 bg-zinc-50/30">
              <div className="space-y-6">
                {/* Doctor Bio */}
                <div className="flex items-center gap-2.5 px-2 pb-4 border-b border-zinc-150/60">
                  <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-extrabold text-xs">
                    SL
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-800 leading-normal">Dr. Sarah Lin</h4>
                    <p className="text-[10px] text-zinc-400 font-medium">Family Physician</p>
                  </div>
                </div>

                {/* Tabs */}
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab("patients")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold tracking-wide text-left cursor-pointer transition-all ${
                      activeTab === "patients" ? "bg-blue-50/50 text-blue-600 border-l-2 border-blue-500" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    <Users className="h-4 w-4 shrink-0" />
                    <span>Patients List</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab("visits")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold tracking-wide text-left cursor-pointer transition-all ${
                      activeTab === "visits" ? "bg-blue-50/50 text-blue-600 border-l-2 border-blue-500" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    <ClipboardList className="h-4 w-4 shrink-0" />
                    <span>Waiting Room</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("consultations")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold tracking-wide text-left cursor-pointer transition-all ${
                      activeTab === "consultations" ? "bg-blue-50/50 text-blue-600 border-l-2 border-blue-500" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    <Activity className="h-4 w-4 shrink-0 text-blue-500" />
                    <span className="flex items-center gap-1.5">
                      Live Visit
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold tracking-wide text-left cursor-pointer transition-all ${
                      activeTab === "settings" ? "bg-blue-50/50 text-blue-600 border-l-2 border-blue-500" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    <Settings className="h-4 w-4 shrink-0" />
                    <span>Settings</span>
                  </button>
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="pt-4 border-t border-zinc-150/60 flex items-center justify-between text-[10px] text-zinc-400 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> HIPAA Compliant
                </span>
                <span>v2.1</span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-grow p-6 bg-white min-h-[420px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                
                {/* Patients Directory */}
                {activeTab === "patients" && (
                  <motion.div
                    key="patients"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 flex-grow"
                  >
                    <div className="border-b border-zinc-100 pb-3">
                      <h3 className="text-sm font-bold text-zinc-800">Patient Directory</h3>
                      <p className="text-[10px] text-zinc-450 mt-0.5">Access history and demographic sheets.</p>
                    </div>
                    <div className="divide-y divide-zinc-100">
                      {patientList.map((p, idx) => (
                        <div key={idx} className="py-3.5 flex justify-between items-center hover:bg-zinc-50/50 px-2 rounded-lg transition-colors cursor-pointer group">
                          <div>
                            <h4 className="text-xs font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">{p.name}</h4>
                            <p className="text-[10px] text-zinc-450 mt-0.5">Age {p.age} • History: {p.history}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-zinc-400 font-mono">Last visit: {p.lastVisit}</span>
                            <ChevronRight className="h-3.5 w-3.5 text-zinc-350" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Waiting Room Queue */}
                {activeTab === "visits" && (
                  <motion.div
                    key="visits"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 flex-grow"
                  >
                    <div className="border-b border-zinc-100 pb-3">
                      <h3 className="text-sm font-bold text-zinc-800">Waiting Room Queue</h3>
                      <p className="text-[10px] text-zinc-450 mt-0.5">Manage intake pipelines and active rooms.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {queueList.map((q, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-zinc-150 bg-white flex items-center justify-between shadow-sm hover:border-zinc-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className={`h-2 w-2 rounded-full ${q.status === "Active Consult" ? "bg-red-500 animate-pulse" : "bg-zinc-300"}`} />
                            <div>
                              <h4 className="text-xs font-bold text-zinc-800">{q.patient}</h4>
                              <p className="text-[10px] text-zinc-400 font-medium">{q.room}</p>
                            </div>
                          </div>
                          <div className="text-right flex items-center gap-4">
                            <div>
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                                q.status === "Active Consult" ? "bg-red-50 text-red-600 border border-red-100" : "bg-zinc-100 text-zinc-500 border border-zinc-150"
                              }`}>
                                {q.status}
                              </span>
                              <p className="text-[10px] text-zinc-400 mt-1 font-mono">{q.time} wait</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Live Consultation Simulator */}
                {activeTab === "consultations" && (
                  <motion.div
                    key="consultations"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-5 flex-grow flex flex-col justify-between"
                  >
                    {/* Header info */}
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3 flex-wrap gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-zinc-850">Live Visit Screen</h3>
                        <p className="text-[10px] text-zinc-450 mt-0.5">
                          Patient: <span className="font-bold text-zinc-700">Jane Doe</span> (Age 42 • History: Hypertension)
                        </p>
                      </div>

                      {/* Controls */}
                      <div>
                        {stage === "idle" && (
                          <button
                            onClick={startSimulation}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm shadow-blue-500/10"
                          >
                            <Play className="h-3 w-3 fill-white" /> Start Simulation
                          </button>
                        )}
                        {(stage === "recording" || stage === "completed" || stage === "processing") && (
                          <button
                            onClick={resetSimulation}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50/50 text-red-650 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                          >
                            <Square className="h-3 w-3 fill-red-650" /> Reset Visit
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Simulation Console */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-grow min-h-[300px]">
                      {/* Left: Feed */}
                      <div className="md:col-span-6 border border-zinc-150 rounded-xl bg-zinc-50/20 p-4 flex flex-col justify-between overflow-hidden">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2 shrink-0">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Activity className="h-3.5 w-3.5 text-blue-500" /> Patient Transcript
                          </span>
                          {stage === "recording" && (
                            <span className="flex items-center gap-1.5 text-[9px] text-red-500 font-bold uppercase tracking-wider">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Recording
                            </span>
                          )}
                        </div>

                        <div className="flex-grow overflow-y-auto space-y-2.5 text-xs text-zinc-700 max-h-[200px] pr-1 scrollbar-thin">
                          {stage === "idle" && (
                            <div className="h-full flex flex-col items-center justify-center text-center text-zinc-400 py-8 space-y-2">
                              <Play className="h-8 w-8 text-zinc-200 animate-pulse" />
                              <p className="font-light">Click &ldquo;Start Simulation&rdquo; to begin the ambient note capture demonstration.</p>
                            </div>
                          )}
                          {transcriptLines.map((line, idx) => (
                            <motion.p
                              key={idx}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`p-2 rounded-lg leading-relaxed ${
                                line.startsWith("Doctor:") 
                                  ? "bg-blue-50/50 text-blue-900 border-l border-blue-500" 
                                  : "bg-zinc-100 text-zinc-800"
                              }`}
                            >
                              {line}
                            </motion.p>
                          ))}
                        </div>
                      </div>

                      {/* Right: Output */}
                      <div className="md:col-span-6 border border-zinc-150 rounded-xl bg-zinc-50/20 p-4 flex flex-col justify-between overflow-hidden relative">
                        {/* Spinner */}
                        <AnimatePresence>
                          {stage === "processing" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-white/90 z-20 flex flex-col items-center justify-center p-6 text-center"
                            >
                              <Sparkles className="h-8 w-8 text-blue-600 animate-spin mb-4" />
                              <p className="text-xs font-bold text-zinc-800">Structuring Medical Context...</p>
                              <p className="text-[10px] text-zinc-400 mt-1 font-mono">{progress}%</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-2 shrink-0">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                            <FileText className="h-3.5 w-3.5 text-indigo-500" /> Generated SOAP Record
                          </span>
                          {stage === "completed" && (
                            <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 flex items-center gap-1">
                              <UserCheck className="h-3 w-3" /> Synced to EHR
                            </span>
                          )}
                        </div>

                        <div className="flex-grow overflow-y-auto text-xs text-zinc-700 space-y-3 max-h-[200px] pr-1 scrollbar-thin">
                          {stage !== "completed" && stage !== "processing" && (
                            <div className="h-full flex flex-col items-center justify-center text-center text-zinc-400 py-8">
                              <p className="font-light">SOAP drafts and prescriptions appear here automatically after visit transcription completes.</p>
                            </div>
                          )}

                          {stage === "completed" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="space-y-3 text-[11px]"
                            >
                              <div className="p-3 rounded-lg border border-indigo-100 bg-white space-y-2 text-left">
                                <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
                                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Clinical SOAP Note</span>
                                  <span className="text-[9px] font-mono font-bold text-zinc-400">ICD-10: J20.9</span>
                                </div>
                                <div className="space-y-1.5 text-zinc-650 leading-relaxed font-normal">
                                  <p><strong>Subjective:</strong> Dry cough x 5 days, mild subjective fever (99.4°F). Accompanied by moderate fatigue and transient generalized muscle aches. Denies dyspnea.</p>
                                  <p><strong>Objective:</strong> Chest auscultation indicates lungs are clear bilaterally. No wheezing or rales.</p>
                                  <p><strong>Assessment:</strong> Acute viral bronchitis suspected.</p>
                                  <p><strong>Plan:</strong> Hydration, physical rest. Cetirizine 10mg PO qhs to mitigate nocturnal cough interruptions.</p>
                                </div>
                              </div>

                              <div className="p-3 rounded-lg border border-emerald-100 bg-white text-left space-y-1.5">
                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block border-b border-zinc-100 pb-1">Prescription Orders</span>
                                <div className="text-zinc-650 font-normal">
                                  <p className="font-bold text-zinc-800">Cetirizine Hydrochloride 10mg</p>
                                  <p className="text-[10px] text-zinc-450 mt-0.5">Dispense: 5 tablets • Sig: Take 1 tablet PO daily at bedtime as needed for dry cough.</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Settings Configuration */}
                {activeTab === "settings" && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 flex-grow"
                  >
                    <div className="border-b border-zinc-100 pb-3">
                      <h3 className="text-sm font-bold text-zinc-800">Workspace Settings</h3>
                      <p className="text-[10px] text-zinc-450 mt-0.5">Customize model defaults and connection paths.</p>
                    </div>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">AI Model Engine</label>
                        <select className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-xs bg-white outline-none text-zinc-700 cursor-pointer">
                          <option>Airo-Clinical-Core-Llama (1.2s latency, Default)</option>
                          <option>Airo-MedGPT-4o (3.5s latency, Complex Cases)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">EHR Integration Node</label>
                        <input type="text" readOnly value="HL7-node-apex-hospital.airo.net" className="w-full px-3 py-2 border border-zinc-150 rounded-lg text-xs bg-zinc-50 outline-none text-zinc-500 font-mono" />
                      </div>
                    </div>
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
