import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="bg-gray-900/40 backdrop-blur-md rounded-3xl p-12 border border-gray-800/50">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text">
              Srushti Yeole
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 font-light">
            Software Developer | Full Stack Developer | Machine Learning
          </p>
          {/* Buttons removed as per request */}
        </div>
      </div>
    </section>
  )
}
