import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SidePanels from "@/components/SidePanels";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Navbar />
      <div className="hidden lg:block relative z-50">
        <SidePanels />
      </div>
      
      <div className="w-full flex-grow space-y-12 pb-12 relative z-10 transition-all duration-300">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
