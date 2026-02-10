export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-1">
                <img
                  src="/photo1.png"
                  alt="Srushti Yeole"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 shadow-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50">
              <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-6">
                Hello! I'm Srushti Yeole
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I am a Computer Engineering student and passionate Software Developer with hands-on experience in both
                frontend and backend development. I have also worked on projects in Machine Learning and Data Science.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I enjoy building practical, user-friendly solutions and believe in continuous learning. I always look
                for ways to improve my work and stay updated with the latest technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My goal is to apply my knowledge to real-world projects, contribute meaningfully to the IT industry, and
                grow as a professional by taking on new challenges and learning from experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
