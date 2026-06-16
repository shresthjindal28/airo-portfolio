"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft, Sparkles, User, Code, Calendar, FileText, Send, Moon, Sun, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useTheme } from "./theme-provider";
import confetti from "canvas-confetti";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Toggle dialog on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-hero",
      title: "Go to Home",
      subtitle: "Scroll to top",
      category: "Navigation",
      icon: <Sparkles className="h-4 w-4" />,
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-about",
      title: "Go to About Me",
      subtitle: "Learn about Shresth",
      category: "Navigation",
      icon: <User className="h-4 w-4" />,
      action: () => scrollTo("about"),
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      subtitle: "View technologies and competencies",
      category: "Navigation",
      icon: <Code className="h-4 w-4" />,
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      subtitle: "Explore work and source repositories",
      category: "Navigation",
      icon: <FileText className="h-4 w-4" />,
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      subtitle: "View history timeline",
      category: "Navigation",
      icon: <Calendar className="h-4 w-4" />,
      action: () => scrollTo("experience"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      subtitle: "Send Shresth a message",
      category: "Navigation",
      icon: <Send className="h-4 w-4" />,
      action: () => scrollTo("contact"),
    },
    // Actions
    {
      id: "action-theme",
      title: `Toggle Theme`,
      subtitle: `Switch to ${theme === "dark" ? "Light" : "Dark"} mode`,
      category: "Actions",
      icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "action-resume",
      title: "Download Resume",
      subtitle: "Get PDF format resume",
      category: "Actions",
      icon: <FileText className="h-4 w-4" />,
      action: () => {
        window.open("/mock_resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "action-confetti",
      title: "Celebrate!",
      subtitle: "Trigger page confetti effect",
      category: "Easter Eggs",
      icon: <Sparkles className="h-4 w-4 text-amber-400" />,
      action: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setIsOpen(false);
      },
    },
    // Links
    {
      id: "link-github",
      title: "Open GitHub Profile",
      subtitle: "@shresthjindal",
      category: "Social Links",
      icon: <Github className="h-4 w-4" />,
      action: () => {
        window.open("https://github.com/shresthjindal", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "link-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "Shresth Jindal",
      category: "Social Links",
      icon: <Linkedin className="h-4 w-4" />,
      action: () => {
        window.open("https://linkedin.com/in/shresthjindal", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchStr = search.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(searchStr) ||
      cmd.category.toLowerCase().includes(searchStr) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(searchStr))
    );
  });

  // Handle keyboard selections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Reset index on search
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Group commands by category
  const categories = Array.from(new Set(filteredCommands.map((cmd) => cmd.category)));

  return (
    <>
      {/* Keyboard Trigger Reminder (Sticky corner) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md text-xs text-zinc-400 shadow-2xl hover:border-teal-500 hover:text-zinc-100 transition-all cursor-pointer"
        aria-label="Open Command Menu"
      >
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px]">⌘</kbd>
        <span>+</span>
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px]">K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-zinc-850 bg-zinc-950/90 shadow-2xl backdrop-blur-xl flex flex-col glass"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 border-b border-zinc-800 py-3.5">
                <Search className="h-4 w-4 text-zinc-500 shrink-0" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none border-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 hover:bg-zinc-800"
                >
                  ESC
                </button>
              </div>

              {/* Command List */}
              <div ref={listRef} className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-sm text-zinc-500">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  <div>
                    {categories.map((category) => {
                      const categoryCommands = filteredCommands.filter((cmd) => cmd.category === category);
                      return (
                        <div key={category} className="mb-3">
                          <h3 className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                            {category}
                          </h3>
                          <div className="space-y-0.5">
                            {categoryCommands.map((cmd) => {
                              // Find absolute index in full filtered list
                              const absoluteIndex = filteredCommands.findIndex((c) => c.id === cmd.id);
                              const isSelected = absoluteIndex === selectedIndex;

                              return (
                                <button
                                  key={cmd.id}
                                  onClick={() => cmd.action()}
                                  onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-all cursor-pointer ${
                                    isSelected
                                      ? "bg-zinc-900 text-teal-400 border border-zinc-800/80 pl-4"
                                      : "text-zinc-400 hover:bg-zinc-900/40 border border-transparent"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`${isSelected ? "text-teal-400" : "text-zinc-500"}`}>
                                      {cmd.icon}
                                    </span>
                                    <div>
                                      <p className={`font-medium ${isSelected ? "text-zinc-100" : "text-zinc-350"}`}>
                                        {cmd.title}
                                      </p>
                                      {cmd.subtitle && (
                                        <p className="text-[11px] text-zinc-500 font-normal">{cmd.subtitle}</p>
                                      )}
                                    </div>
                                  </div>
                                  {isSelected && (
                                    <span className="flex items-center gap-0.5 text-[10px] text-zinc-500 font-mono">
                                      <span>Enter</span>
                                      <CornerDownLeft className="h-3 w-3" />
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-zinc-900 bg-zinc-950 px-4 py-2 text-[10px] text-zinc-550">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 rounded bg-zinc-900 border border-zinc-800">↑↓</kbd>
                    <span>Navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 rounded bg-zinc-900 border border-zinc-800">Enter</kbd>
                    <span>Select</span>
                  </span>
                </div>
                <span>Shresth Jindal Portfolio v1.0</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
