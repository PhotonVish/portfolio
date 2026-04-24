"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ChevronRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6 relative max-w-6xl mx-auto overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-brand-neon)]/10 rounded-full blur-3xl opacity-50" />
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-brand-neon)] font-mono tracking-wider"
            >
              Hi, my name is
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Srishti Prakash Vishwakarma.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
              AI/ML Engineer & Full Stack Dev.
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
            I synthesize complex analytical models and construct robust full-stack applications.
            Let&apos;s build the future of intelligent systems.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="bg-[var(--color-brand-neon)]/10 border border-[var(--color-brand-neon)] text-[var(--color-brand-neon)] px-6 py-3 rounded-full font-medium hover:bg-[var(--color-brand-neon)] hover:text-black transition-all flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            {/* Resume File URL will just point to the resume if we copy it to public later, for now just an action */}
            <a 
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full font-medium text-gray-300 hover:text-white transition-all flex items-center gap-2 underline underline-offset-4"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-brand-neon)] to-[#0a2e1d] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-black/50 filter brightness-95 group-hover:brightness-110 transition-all duration-300 transform group-hover:scale-[1.02]">
              <Image 
                src="/profile.jpg" 
                alt="Srishti Prakash" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Hover Floating element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-neon)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-brand-neon)]"></span>
              </span>
              <span className="text-sm font-medium">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
