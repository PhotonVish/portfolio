"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "ML Engineer(Intern)",
    company: "Day and Night Space Foundation",
    duration: "Mar 2025 – Jun 2025",
    icon: <Briefcase className="w-5 h-5 text-white" />,
    color: "bg-indigo-500",
    details: [
      "Analyzed and processed large datasets to extract meaningful insights and improve prediction quality",
      "Applied feature selection techniques to reduce dimensionality and enhance model efficiency",
      "Visualized trends and model performance using Matplotlib to support decision-making",
      "Improved model generalization by tuning hyperparameters using Search"
    ]
  },
  {
    id: 2,
    role: "Placement Coordinator",
    company: "IIIT Kalyani",
    duration: "Feb 2025 – Jun 2025",
    icon: <Users className="w-5 h-5 text-white" />,
    color: "bg-[var(--color-brand-neon)] text-black",
    details: [
      "Coordinated and streamlined recruitment processes.",
      "Collaborated with industry partners and organized placement activities for the batch."
    ]
  },
  {
    id: 3,
    role: "Student Coordinator, Gymkhana",
    company: "IIIT Kalyani",
    duration: "Aug 2024 – Aug 2025",
    icon: <Users className="w-5 h-5 text-white" />,
    color: "bg-purple-500",
    details: [
      "Facilitated communication between students and administrative authorities.",
      "Addressed and resolved student concerns."
    ]
  },
  {
    id: 4,
    role: "Winner, Smart India Hackathon (Internal)",
    company: "Disaster Management System",
    duration: "2024",
    icon: <Award className="w-5 h-5 text-white" />,
    color: "bg-yellow-500",
    details: [
      "Led a team to secure first place in the internal round.",
      "Designed and presented a Disaster Management System addressing real-world challenges."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Experience & Leadership <span className="text-[var(--color-brand-neon)]">_</span></h2>
          <div className="h-px bg-white/20 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="relative border-l-2 border-white/10 ml-6 md:ml-8 pl-8 md:pl-12 space-y-12">
        {experienceData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative group block"
          >
            {/* Timeline Node */}
            <span className={`absolute -left-[50px] md:-left-[66px] top-1 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ${item.color} shadow-lg ring-4 ring-[#02140a]`}>
              {item.icon}
            </span>

            <div className="glass p-6 md:p-8 rounded-2xl group-hover:bg-white/5 transition-colors border-l-4 border-l-transparent group-hover:border-l-[var(--color-brand-neon)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--color-brand-neon)] transition-colors">
                  {item.role}
                </h3>
                <span className="text-sm font-mono text-gray-400 mt-2 md:mt-0">{item.duration}</span>
              </div>

              <h4 className="text-md text-indigo-300 font-medium mb-4">{item.company}</h4>

              <ul className="space-y-2">
                {item.details.map((desc, i) => (
                  <li key={i} className="text-gray-300 text-sm md:text-base flex items-start gap-2">
                    <span className="text-[var(--color-brand-neon)] mt-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
