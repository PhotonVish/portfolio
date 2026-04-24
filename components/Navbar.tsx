"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-6"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 text-sm md:text-base font-medium">
        <a href="#about" className="hover:text-[var(--color-brand-neon)] transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-[var(--color-brand-neon)] transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-[var(--color-brand-neon)] transition-colors">
          Projects
        </a>
        <a href="#experience" className="hover:text-[var(--color-brand-neon)] transition-colors">
          Experience
        </a>
        <a href="#contact" className="hover:text-[var(--color-brand-neon)] transition-colors">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
