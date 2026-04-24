"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2 } from "lucide-react";

export default function SidePanels() {
  return (
    <>
      {/* Left Panel: AI/ML */}
      <motion.div
        initial={{ x: "calc(-100% + 3rem)" }}
        whileHover={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-1/4 left-0 h-96 w-72 bg-gradient-to-r from-[rgba(10,25,47,0.95)] to-[rgba(10,25,47,0.8)] backdrop-blur-md border border-[var(--color-glass-border)] rounded-tr-3xl rounded-br-3xl z-40 flex shadow-2xl"
      >
        <div className="flex-1 p-6 text-white overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-4 border-b border-indigo-500/30 pb-2">AI / ML Projects</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-300 hover:text-indigo-200 hover:underline transition-colors block">
                Brain Tumor Detection
              </a>
              <p className="text-sm text-gray-400">94.8% Acc, Xception + PDCNN</p>
            </li>
            <li>
              <a href="https://huggingface.co/spaces/PhotoVish/breast-cancer-diagnostic" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-300 hover:text-indigo-200 hover:underline transition-colors block">
                Breast Cancer Class.
              </a>
              <p className="text-sm text-gray-400">90% Acc, PyTorch, ConvNeXt</p>
            </li>
          </ul>
        </div>
        <div className="w-12 h-full flex flex-col items-center justify-center border-l border-white/5 bg-black/20">
          <BrainCircuit className="text-indigo-400 mb-4" />
          <span className="writing-vertical-rl rotate-180 tracking-[0.2em] text-sm text-indigo-300 uppercase font-bold">
            AI / ML
          </span>
        </div>
      </motion.div>

      {/* Right Panel: Software Dev */}
      <motion.div
        initial={{ x: "calc(100% - 3rem)" }}
        whileHover={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-1/4 right-0 h-96 w-72 bg-gradient-to-l from-[rgba(70,20,20,0.95)] to-[rgba(70,20,20,0.8)] backdrop-blur-md border border-[var(--color-glass-border)] rounded-tl-3xl rounded-bl-3xl z-40 flex shadow-2xl"
      >
        <div className="w-12 h-full flex flex-col items-center justify-center border-r border-white/5 bg-black/20">
          <Code2 className="text-red-400 mb-4" />
          <span className="writing-vertical-rl rotate-180 tracking-[0.2em] text-sm text-red-300 uppercase font-bold">
            Software
          </span>
        </div>
        <div className="flex-1 p-6 text-white overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-4 border-b border-red-500/30 pb-2">Dev Projects</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-red-300 hover:text-red-200 hover:underline transition-colors block">
                Advanced CRUD App
              </a>
              <p className="text-sm text-gray-400">MySQL, up to 4NF</p>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-red-300 hover:text-red-200 hover:underline transition-colors block">
                FastAPI Web Service
              </a>
              <p className="text-sm text-gray-400">RESTful API, Next.js</p>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* CSS for writing-vertical-rl if not supported by tailwind implicitly */}
      <style jsx>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
}
