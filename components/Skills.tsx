"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Operations & Workflow",
    items: ["Designed and optimized workflows", "managed event operations", "ensured efficient data handling", "coordinated tasks"],
  },
  {
    category: "Programming Languages",
    items: ["C", "Python", "Assembly (ASM)", "Shell Script", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "AI/ML Tools",
    items: ["PyTorch", "Scikit-Learn", "TensorFlow", "Keras", "Pandas", "NumPy", "OpenCV", "LangChain", "LangGraph"],
  },
  {
    category: "Backend  Frameworks",
    items: ["FastAPI", "Express.js", "Flask", "Django"],
  }, {
    category: "Frontend Frameworks",
    items: ["HTML", "Tailwind CSS", "Java Script", "React", "Next.js"],
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "Docker", "Linux", "Git/GitHub", "Distributed Systems", "SQL/NoSQL", "Postman", "Matlab"],
  },

];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Skills <span className="text-[var(--color-brand-neon)]">_</span></h2>
          <div className="h-px bg-white/20 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden group"
          >
            {/* Subtle highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl font-bold text-white mb-6 font-mono border-b border-white/10 pb-4">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white/5 hover:bg-[var(--color-brand-neon)]/10 border border-white/10 hover:border-[var(--color-brand-neon)]/50 rounded-lg text-sm font-medium text-gray-300 hover:text-[var(--color-brand-neon)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
