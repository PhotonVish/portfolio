"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.12 5 2.5 5 2.5a5.5 5.5 0 0 0-.15 3.8A5.5 5.5 0 0 0 3 10.1c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export const Linkedin = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative max-w-4xl mx-auto flex flex-col items-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[var(--color-brand-neon)] font-mono tracking-wider mb-4"
      >
        What&apos;s Next?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-lg mb-12 text-lg"
      >
        I&apos;m currently actively looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row items-center gap-6"
      >
        <a
          href="mailto:photonvish@gmail.com"
          className="border-2 border-[var(--color-brand-neon)] text-[var(--color-brand-neon)] hover:bg-[var(--color-brand-neon)] hover:text-black px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-3 text-lg"
        >
          <Mail size={24} />
          Say Hello
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex items-center gap-6 text-gray-400"
      >
        <a href="https://github.com/PhotonVish" target="_blank" className="hover:text-[var(--color-brand-neon)] transition-colors p-2 glass rounded-full hover:-translate-y-1 transform duration-200">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/srishti-prakash-vishwakarma/" target="_blank" className="hover:text-[var(--color-brand-neon)] transition-colors p-2 glass rounded-full hover:-translate-y-1 transform duration-200">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="tel:+917518720626" className="hover:text-[var(--color-brand-neon)] transition-colors p-2 glass rounded-full hover:-translate-y-1 transform duration-200">
          <Phone size={24} />
          <span className="sr-only">Phone</span>
        </a>
      </motion.div>

      <div className="mt-24 text-gray-500 font-mono text-sm">
        <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Srishti Prakash Vishwakarma.</p>
      </div>
    </section>
  );
}
