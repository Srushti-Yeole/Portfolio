export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, fast, responsive websites using React and Tailwind CSS.",
      gradient: "from-pink-400 to-rose-400",
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful user experiences with Figma, HTML/CSS.",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Project Collaboration",
      description: "Team up and contribute on live projects using GitHub & tools.",
      gradient: "from-blue-400 to-purple-400",
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile apps using React Native and Expo.",
      gradient: "from-cyan-400 to-blue-400",
    },
    {
      title: "Portfolio Creation",
      description: "Helping others build standout personal websites like this one!",
      gradient: "from-green-400 to-cyan-400",
    },
    {
      title: "Machine Learning Solutions",
      description: "Building custom ML solutions tailored to your needs using Python.",
      gradient: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            Services I Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50 hover:border-pink-400/50 transition-all duration-300 group"
            >
              <h3
                className={`text-xl font-bold text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text mb-4`}
              >
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
