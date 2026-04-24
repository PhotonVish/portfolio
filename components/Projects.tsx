"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.12 5 2.5 5 2.5a5.5 5.5 0 0 0-.15 3.8A5.5 5.5 0 0 0 3 10.1c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export const projectsData = [
  {
    id: 1,
    title: "Breast Cancer Classification",
    description: "Deep Learning Histopathology Classifier to detect Invasive Ductal Carcinoma (IDC).",
    tech: ["PyTorch", "Scikit-Learn", "ConvNeXt"],
    metrics: "~90% Accuracy, 0.95 AUC",
    details: "Engineered a robust preprocessing pipeline using Elastic Transformations and Stochastic Depth regularization to handle high intra-class variance on a 277k+ patches dataset. Utilized Transfer Learning and Test-Time Augmentation (TTA).",
    github: "https://github.com/PhotonVish/breast-cancer-histopathology",
    link: "https://huggingface.co/spaces/PhotoVish/breast-cancer-diagnostic",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    description: "Hybrid ensemble model combining Xception and PDCNN for accurate brain tumor classification.",
    tech: ["TensorFlow", "Keras", "Flask", "Python"],
    metrics: "94.81% Accuracy, 92.36% F1-score",
    details: "Developed a robust deep learning pipeline to process MRI images and detect presence of brain tumors. Deployed using a Flask-based web interface and instrumented usage analytics to quantify model performance in real healthcare scenarios.",
    github: "https://github.com/PhotonVish/brain_tumor_detection",
    link: "#",
  },

  {
    id: 3,
    title: "ComputeX: a distributed compute engine",
    description: "ComputeX distributes the workload across multiple worker nodes using TCP sockets",
    tech: ["React.js", "Flask", "CSS"],
    metrics: "25% load time reduction",
    details: "A distibuted system which lets user perfom multiple tasks like matrix multiplication and large-scale sorting to word frequency analysis, image processing, and prime number operations using TCP Socket .",
    github: "https://github.com/PhotonVish/ComputeX",
    link: "#",
  },
  {
    id: 4,
    title: "Advanced CRUD Application",
    description: "A highly normalized MySQL database backing a full CRUD structure.",
    tech: ["MySQL", "Backend Tech"],
    metrics: "Up to 4NF Normalization",
    details: "Created a moderately complex MySQL based data structure with multiple entities and relationships. Successfully implemented advanced normalization up to 4NF, eliminating data redundancy.",
    github: "https://github.com/PhotonVish/library_management_system",
    link: "#",
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Projects <span className="text-[var(--color-brand-neon)]">_</span></h2>
          <div className="h-px bg-white/20 flex-1 ml-4" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="glass p-8 rounded-2xl cursor-pointer group hover:bg-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-brand-neon)] transition-colors">
                {project.title}
              </h3>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>

            <p className="text-gray-400 mb-6 line-clamp-2">
              {project.description}
            </p>

            <div className="mb-4">
              <span className="text-sm text-indigo-300 font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full inline-block" />
                {project.metrics}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full p-8 rounded-2xl shadow-2xl relative border-t-2 border-t-[var(--color-brand-neon)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold text-white mb-2 pr-8">{selectedProject.title}</h3>
              <p className="text-[var(--color-brand-neon)] font-mono text-sm mb-6">{selectedProject.metrics}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 border-b border-white/10 pb-2">Overview & Challenges Solved</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 border-b border-white/10 pb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-sm font-medium px-3 py-1 bg-white/10 rounded-full text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <a href={selectedProject.github} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded text-sm font-medium transition-colors">
                    <Github size={18} /> View Source
                  </a>
                  <a href={selectedProject.link} className="flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-neon)]/10 text-[var(--color-brand-neon)] hover:bg-[var(--color-brand-neon)] hover:text-black rounded text-sm font-bold transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
