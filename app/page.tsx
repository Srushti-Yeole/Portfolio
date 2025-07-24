import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Services />
        <Projects />
        <Resume />
        <Gallery />
        <Contact />
      </main>
    </div>
  )
}
