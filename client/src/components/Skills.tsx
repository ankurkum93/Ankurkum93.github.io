import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "SQL (Oracle, PostgreSQL, Spark SQL)", level: 95 },
  { name: "Python (Data Engineering & ML)", level: 92 },
  { name: "Power BI & Tableau", level: 90 },
  { name: "Apache Airflow", level: 85 },
  { name: "Docker & Kubernetes", level: 80 },
  { name: "AWS & GCP", level: 85 },
];

const analyticalTools = [
  "Advanced Excel", "Tableau", "SAS Advanced", "Power BI", "Qlik Sense"
];

const databases = [
  "Oracle SQL", "PostgreSQL", "Apache HIVE", "MongoDB", "Spark SQL"
];

const dataEngineering = [
  "Python", "Apache Airflow", "Docker", "Kubernetes", "Github", "AWS", "Informatica", "GCP"
];

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Extensive experience with cutting-edge technologies through academic and professional projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with 3D Progress Bars */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-2000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Analytical Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {analyticalTools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-blue-600/20 border border-blue-500/30 px-3 py-2 rounded-lg text-blue-300 hover:bg-blue-600/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {databases.map((db, index) => (
                  <span 
                    key={index}
                    className="bg-purple-600/20 border border-purple-500/30 px-3 py-2 rounded-lg text-purple-300 hover:bg-purple-600/30 transition-colors"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Data Engineering
              </h3>
              <div className="flex flex-wrap gap-3">
                {dataEngineering.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-green-600/20 border border-green-500/30 px-3 py-2 rounded-lg text-green-300 hover:bg-green-600/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
