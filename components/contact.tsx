import { Button } from "@/components/ui/button"
import { Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Srushti-Yeole",
      color: "hover:text-gray-300",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:srushtiyeole82@gmail.com",
      color: "hover:text-red-400",
      gradient: "from-red-400 to-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/srushti-yeole-6b4958258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400",
      gradient: "from-blue-400 to-cyan-400",
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50 text-center">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-6">
              Let's Connect!
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and connecting with fellow developers. Feel
              free to reach out if you'd like to discuss projects, share ideas, or just have a chat about technology!
            </p>

            <div className="space-y-4 mb-8 max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">Malegaon, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">srushtiyeole82@gmail.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-6">Follow Me On</h4>
              <div className="flex gap-6 justify-center flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
