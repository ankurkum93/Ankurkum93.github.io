import { useEffect, useRef } from "react";
import { ArrowDown, Handshake, Eye } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="animate-on-scroll text-5xl lg:text-7xl font-bold mb-6 leading-tight opacity-0">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Ankur</span>
            </h1>
            <p className="animate-on-scroll text-xl lg:text-2xl mb-8 text-gray-300 font-light opacity-0" style={{ animationDelay: "0.2s" }}>
              I love to build and deploy <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold">Data Models</span>
            </p>
            <p className="animate-on-scroll text-lg mb-10 text-gray-400 max-w-2xl opacity-0" style={{ animationDelay: "0.4s" }}>
              Senior Data Engineer with 8+ years of experience in building scalable data pipelines, 
              machine learning models, and business intelligence solutions. Specialized in Python, 
              SQL, and cloud technologies.
            </p>
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0" style={{ animationDelay: "0.6s" }}>
              <button 
                onClick={() => scrollToSection("contact")}
                className="group backdrop-blur-lg bg-white/10 border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Handshake size={20} />
                Work With Me
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="group border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                See My Past Work
              </button>
            </div>
          </div>
          <div className="animate-on-scroll relative opacity-0" style={{ animationDelay: "0.8s" }}>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech workspace with multiple monitors" 
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
