"use client"

import { useState } from "react"
import { Award, QrCode, CheckCircle, Shield, X } from "lucide-react"
import Image from "next/image"

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  gradient: string;
  description: string;
  network: string;
}

export default function Gallery() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const certifications = [
    {
      title: "AI & Machine Learning",
      issuer: "Codec Technologies",
      image: "/AI.png",
      gradient: "from-purple-400 to-pink-400",
      description: "Comprehensive AI & ML training program",
      network: "ethereum",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "/AWS.png",
      gradient: "from-orange-400 to-yellow-400",
      description: "Cloud infrastructure and services",
      network: "avalanche",
    },
    {
      title: "Ethical Hacking",
      issuer: "K.K. Wagh Institute",
      image: "/Ethical.png",
      gradient: "from-red-400 to-pink-400",
      description: "Cybersecurity and penetration testing",
      network: "binance",
    },
    {
      title: "Python Programming",
      issuer: "Python Institute",
      image: "/python.png",
      gradient: "from-blue-400 to-cyan-400",
      description: "Advanced Python development",
      network: "ethereum",
    },
    {
      title: "RDBMS & PostgreSQL",
      issuer: "IIT Bombay",
      image: "/RDBMS.png",
      gradient: "from-indigo-400 to-purple-400",
      description: "Database management and design",
      network: "polygon",
    },
    {
      title: "Machine Learning Internship",
      issuer: "Vaidsys Technologies",
      image: "/Internship.png",
      gradient: "from-green-400 to-teal-400",
      description: "Practical ML applications",
      network: "polygon",
    },
  ]

  const getNetworkBadge = (network: string) => {
    const networks = {
      ethereum: { name: "ETH", color: "from-blue-400 to-purple-400" },
      polygon: { name: "MATIC", color: "from-purple-400 to-pink-400" },
      binance: { name: "BSC", color: "from-yellow-400 to-orange-400" },
      avalanche: { name: "AVAX", color: "from-red-400 to-pink-400" },
    }
    return networks[network as keyof typeof networks] || networks.ethereum
  }

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 px-6 relative">
      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-pink-400 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
              <div className="relative w-full h-[70vh] bg-black">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-4"
                  quality={100}
                />
              </div>
              <div className="p-4 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-gray-300">{selectedCert.issuer}</p>
                <p className="text-gray-400 text-sm mt-2">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            Gallery
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <Award className="h-8 w-8 text-yellow-400" />
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Certifications
            </h3>
            <span className="bg-green-400/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/30 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Verifiable
            </span>
            <span className="bg-blue-400/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-400/30 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Blockchain Secured
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => openModal(cert)}
                className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/50 hover:border-pink-400/50 transition-all duration-300 group cursor-pointer relative"
              >
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-full">
                    <QrCode className="h-4 w-4 text-pink-400" />
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-full">
                    <Shield className="h-4 w-4 text-green-400" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-xs px-2 py-1 rounded-full text-transparent bg-gradient-to-r ${getNetworkBadge(cert.network).color} bg-clip-text border border-gray-600 bg-black/60 backdrop-blur-sm`}
                  >
                    {getNetworkBadge(cert.network).name}
                  </span>
                </div>
                <div className="relative">
                  <div className="relative w-full h-40">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs opacity-80">{cert.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4
                    className={`font-bold text-transparent bg-gradient-to-r ${cert.gradient} bg-clip-text mb-2 text-sm`}
                  >
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-xs leading-relaxed">{cert.issuer}</p>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <Shield className="h-3 w-3 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
