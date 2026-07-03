import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample AI models list
const models = [
  { id: "gpt-4o", name: "GPT-4o", description: "Great for complex reasoning and creative tasks" },
  { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet", description: "High-level intelligence and coding expert" },
  { id: "gemini-3-5-flash", name: "Gemini-3.5 Flash", description: "Fast, multimodal model with deep context window" },
  { id: "llama-3-70b", name: "Llama 3 70B", description: "Powerful open-source model optimized for dialogue" }
];

export default function AIModelSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg dark:border dark:border-(--border) dark:border-t-2 dark:border-t-(--highlight) bg-(--bg) text-(--text-muted) hover:text-(--text) backdrop-blur-md shadow-sm hover:bg-(--bg-light) active:scale-98 transition-all duration-150 focus:outline-none"
      >
        {/* Dropdown Chevron Icon */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="text-neutral-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
        
        {/* Selected Model Name */}
        <span className="text-sm font-medium  tracking-tight">
          {selectedModel.name}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 mt-1 w-72 origin-top-left rounded-xl dark:border dark:border-(--border) dark:border-t-2 dark:border-t-(--highlight) bg-(--bg) p-1.5 shadow-xl ring-1 ring-black/5 z-50 focus:outline-none"
          >
            <div className="flex flex-col gap-1">
              {models.map((model) => {
                const isSelected = model.id === selectedModel.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => {
                      setSelectedModel(model);
                      setIsOpen(false);
                    }}
                    className="relative flex flex-col items-start w-full px-3.5 py-2.5 rounded-lg text-left transition-colors duration-150 group"
                  >
                    {/* Hover and Selection background active indicator */}
                    {isSelected ? (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-(--bg-light) rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : (
                      <div className="absolute inset-0 rounded-lg bg-neutral-50/0 transition-colors group-hover:bg-(--bg-light) -z-10" />
                    )}

                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-semibold text-(--text)">
                        {model.name}
                      </span>
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-neutral-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-(--text-muted) mt-0.5 leading-relaxed">
                      {model.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}