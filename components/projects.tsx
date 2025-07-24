import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Urban Bike Pooling Platform",
      description:
        "Developed a real-time bike pooling platform to reduce urban traffic, carbon emissions, and commuting costs.",
      image: "/urban.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      gradient: "from-green-400 to-cyan-400",
      duration: "Jan 2024 - Mar 2024",
      role: "Frontend Development",
      githubUrl: "https://github.com/Srushti-Yeole/Urban-Bike-Pooling.git"
    },
    {
      title: "AgriBuzz – Agriculture Management System",
      description:
        "Developed a web platform for farmers to buy and sell products online, and get agriculture-related latest news and blogs.",
      image: "/agric.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "WAMP"],
      gradient: "from-yellow-400 to-green-400",
      duration: "Jan 2024 - Mar 2024",
      role: "Frontend Development",
    },
    {
      title: "Machine Learning Internship Projects",
      description:
        "Completed various ML projects during internship at Vaidsys Technologies, focusing on practical applications.",
      image: "/credit.png",
      technologies: ["Python", "Machine Learning", "Data Science", "AI"],
      gradient: "from-cyan-400 to-blue-400",
      duration: "May 2025 - June 2025",
      role: "ML Intern",
      githubUrl: "https://github.com/Srushti-Yeole/Fraud-Detection-in-Credit-Card-Transactions.git"
    },
    {
      title: "Ayurvedic Treatment App",
      description: "A mobile app that provides natural remedies, dosha-based health advice, and herbal information using Ayurveda. Features include symptom-based suggestions, a dosha quiz, a searchable herbal database, and a built-in chatbot for quick guidance.",
      image: "/ayurvedic.png",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML", "Ayurveda API"],
      gradient: "from-purple-400 to-pink-400",
      duration: "2024 - Present",
      role: "Full Stack Development",
      githubUrl: "https://github.com/Srushti-Yeole/Ayurvedic_Treatment.git"
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/50 hover:border-pink-400/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text mb-2`}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 text-sm">{project.duration}</span>
                  {project.role && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="text-pink-400 text-sm font-medium">{project.role}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pink-400/20 text-pink-400 text-xs rounded-full border border-pink-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-black font-medium`}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
