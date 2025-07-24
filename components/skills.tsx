export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "🌐", color: "from-orange-400 to-red-400" },
        { name: "CSS", icon: "🎨", color: "from-blue-400 to-cyan-400" },
        { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-400" },
        { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-400" },
        { name: "React Native", icon: "📱", color: "from-purple-400 to-pink-400" },
        { name: "Tailwind", icon: "💨", color: "from-teal-400 to-cyan-400" },
      ],
    },
    {
      title: "Backend & Programming",
      skills: [
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400" },
        { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-400" },
        { name: "MongoDB", icon: "🍃", color: "from-green-400 to-teal-400" },
        { name: "C", icon: "⚙️", color: "from-blue-400 to-indigo-400" },
        { name: "C++", icon: "⚡", color: "from-blue-400 to-purple-400" },
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-400" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "📝", color: "from-orange-400 to-red-400" },
        { name: "GitHub", icon: "🐙", color: "from-gray-400 to-gray-600" },
        { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-400" },
        { name: "Canva", icon: "🎭", color: "from-cyan-400 to-blue-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            Tech Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center group cursor-pointer">
                    <div
                      className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
