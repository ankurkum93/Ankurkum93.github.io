import { MapPin, Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export default function Contact() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'Ankur_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's get in touch.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Professional Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="https://www.linkedin.com/in/ankurkum93" 
              target="_blank" 
              rel="noopener noreferrer"
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group"
            >
              <Linkedin className="mx-auto text-5xl text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">LinkedIn</h3>
              <p className="text-gray-300 mb-4">Connect professionally and view my career journey</p>
              <span className="text-blue-400 font-semibold">linkedin.com/in/ankurkum93</span>
            </a>
            
            <a 
              href="https://github.com/ankurkum93" 
              target="_blank" 
              rel="noopener noreferrer"
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group"
            >
              <Github className="mx-auto text-5xl text-gray-300 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">GitHub</h3>
              <p className="text-gray-300 mb-4">Explore my open source projects and contributions</p>
              <span className="text-gray-300 font-semibold">github.com/ankurkum93</span>
            </a>
          </div>
          
          {/* Contact Information & Resume */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:ankurkum93@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      ankurkum93@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+393474609701" className="text-white hover:text-blue-400 transition-colors">
                      +39 3474609701
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Genoa, Liguria, Italy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Resume Download
              </h3>
              <p className="text-gray-300 mb-6">
                Download my complete resume with detailed experience, skills, and achievements in data engineering.
              </p>
              <button 
                onClick={downloadResume}
                className="backdrop-blur-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <Download size={20} />
                Download Resume (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
