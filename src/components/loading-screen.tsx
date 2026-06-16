"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "git clone portfolio...",
    "resolving packages...",
    "loading developer.json...",
    "importing creative_assets...",
    "initializing portfolio.exe...",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 font-mono select-none px-4"
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <div className="w-full max-w-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-t-md">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-zinc-500">shresth-portfolio.sh</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-black/40 border border-t-0 border-zinc-800 p-6 rounded-b-md">
          <div className="h-16 flex flex-col justify-end text-sm mb-4">
            <span className="text-zinc-500">$ {loadingTexts[textIndex]}</span>
            <span className="text-[#428475] font-semibold mt-1">
              {progress === 100 ? "✓ Ready" : `➜ ${progress}%`}
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#428475] to-[#89D7B7]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
