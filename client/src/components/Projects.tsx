import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Covid-19 Report",
    description: "Used NiFi to maintain data flow, SQL for transformation and Power BI for visualization of Covid-19 trends in Italy.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["Apache NiFi", "SQL", "Power BI"],
    colors: ["bg-red-600", "bg-blue-600", "bg-yellow-600"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiODQxZjNmZmItNTA2OS00NmY3LWJhODQtMjM5N2QyN2RiYzg4IiwidCI6IjZjZDM2ZjgzLTFhMDItNDQyZC05NzJmLTI2NzBjYjVlOWIxYSIsImMiOjh9&pageName=ReportSection1c349ce01cc14d856c35",
    type: "external"
  },
  {
    title: "Maven Toys Challenge",
    description: "Analyzed toy sales data in Mexico from 1994-2018. Data cleaning in Excel, transformation in SQL and Power BI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["Excel", "SQL", "Power BI"],
    colors: ["bg-green-600", "bg-blue-600", "bg-yellow-600"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmZiN2I5MzctYTkyNi00ZGVlLTkxMzUtOGVjM2Q5NjFhYzI5IiwidCI6IjZjZDM2ZjgzLTFhMDItNDQyZC05NzJmLTI2NzBjYjVlOWIxYSIsImMiOjh9&pageName=ReportSection4d539820a08983994be8",
    type: "external"
  },
  {
    title: "Danny's Diner SQL Project",
    description: "Complex SQL queries on restaurant data using STAR Schema with multiple tables, joins, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["SQL", "Database Design"],
    colors: ["bg-blue-600", "bg-gray-600"],
    link: "https://github.com/ankurkum93/CaseStudy-SQL",
    type: "github"
  },
  {
    title: "Mobile Metro App",
    description: "Full-stack mobile metro app developed from scratch including data generation, cleaning, and Cassandra ingestion.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["Cassandra", "NoSQL"],
    colors: ["bg-purple-600", "bg-orange-600"],
    link: "https://github.com/ankurkum93/ADM",
    type: "github"
  },
  {
    title: "Bike MS Data Warehouse",
    description: "Data warehousing project with cleaning, ingestion in distributed systems using Spark, Hive, and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["Spark", "Hive", "PostgreSQL", "Tableau"],
    colors: ["bg-red-600", "bg-yellow-600", "bg-blue-600", "bg-orange-600"],
    link: "https://github.com/ankurkum93/Data-Warehousing",
    type: "github"
  },
  {
    title: "Movie Recommender System",
    description: "ML-based recommendation engine using content-based and collaborative filtering techniques.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    tech: ["Python", "Machine Learning"],
    colors: ["bg-green-600", "bg-purple-600"],
    link: "https://github.com/ankurkum93/Data-Mining",
    type: "github"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Projects I've Built
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Many projects are in incubation mode and many have come to fruition. Below are some highlights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${project.colors[techIndex]} px-2 py-1 rounded text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors group"
                >
                  {project.type === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                  {project.type === "github" ? "View Code" : "View Project"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
