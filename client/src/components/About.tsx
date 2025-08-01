export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Data Engineer with expertise in end-to-end data solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">Senior Data Engineer</h4>
                <p className="text-blue-400 mb-2">BID Company, Italy • May 2024 - Present</p>
                <p className="text-gray-300">
                  Leading end-to-end migration projects for Italian banks, developing ML models for credit systems, and mentoring junior engineers.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-semibold mb-2">Data Engineer</h4>
                <p className="text-purple-400 mb-2">HelloFresh Italia • Feb 2022 - May 2024</p>
                <p className="text-gray-300">
                  Built data pipelines reducing processing time from 45 minutes to 5 minutes, created automated courier delivery analytics.
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-6">
                <h4 className="text-xl font-semibold mb-2">Business Analyst</h4>
                <p className="text-green-400 mb-2">American Express, India • Mar 2016 - Sep 2018</p>
                <p className="text-gray-300">
                  Built automated processing systems, reduced partner enablement pendency from 19.57% to 2.29%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Abstract data visualization with colorful charts and graphs" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">MSc Computer Science (Data Science & Engineering)</h4>
                  <p className="text-gray-400">Università degli Studi di Genova, Italy • Dec 2021</p>
                </div>
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Applications</h4>
                  <p className="text-gray-400">Indraprastha University, India • Jul 2015</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Power BI (INeuron)</span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Qlik Sense</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">SQL (HackerRank)</span>
                <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">English (C1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
