import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-2xl font-light animate-pulse">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Loading Experience...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600 z-50 transition-transform duration-200"
        style={{ 
          width: '100%',
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left'
        }}
      />
      
      <ParticlesBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ankur Kumar. Crafted with passion for data engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}
