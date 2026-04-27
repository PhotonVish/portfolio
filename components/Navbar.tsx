"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#about";
      
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Determine if section is currently intersecting viewport (mainly upper half)
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSection = item.href;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-6 pointer-events-none"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-full p-1.5 flex items-center gap-1 md:gap-2 text-sm md:text-base font-medium pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.href);
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                isActive ? "text-[#02140a] font-bold" : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[var(--color-brand-neon)] rounded-full z-0 shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
