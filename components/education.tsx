export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "K.K.Wagh Institute Of Engineering Education And Research, Nashik",
      duration: "2022 - 2026",
      grade: "CGPA: 7.5",
      status: "Currently Pursuing",
      color: "from-pink-400 to-purple-400",
    },
    {
      degree: "Higher Secondary Certification Examination (HSC)",
      institution: "M.S.G Junior College, Malegaon",
      duration: "2021 - 2022",
      grade: "80.50%",
      status: "",
      color: "from-purple-400 to-blue-400",
    },
    {
      degree: "Secondary School Certificate Examination (SSC)",
      institution: "Sau.R.Z.Kakani Kanya Vidyalaya, Malegaon",
      duration: "2019 - 2020",
      grade: "92%",
      status: "",
      color: "from-blue-400 to-cyan-400",
    },
  ]

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            My Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50 hover:border-pink-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3
                  className={`text-2xl font-bold text-transparent bg-gradient-to-r ${edu.color} bg-clip-text mb-2 md:mb-0`}
                >
                  {edu.degree}
                </h3>
                <span className="text-gray-400 font-medium">{edu.duration}</span>
              </div>
              <p className="text-gray-300 text-lg mb-4">{edu.institution}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-pink-400 font-bold text-lg">{edu.grade}</span>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    edu.status === "Currently Pursuing"
                      ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                      : "bg-green-400/20 text-green-400 border border-green-400/30"
                  }`}
                >
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
