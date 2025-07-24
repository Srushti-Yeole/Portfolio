"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, ArrowRight, ArrowLeft, X, Star, Clock, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CertificateModal } from "@/components/ui/certificate-modal"

// Color scheme configuration
const theme = {
  primary: {
    light: '#4f46e5',
    DEFAULT: '#4338ca',
    dark: '#3730a3',
  },
  secondary: {
    light: '#7c3aed',
    DEFAULT: '#6d28d9',
    dark: '#5b21b6',
  },
  background: {
    light: '#f9fafb',
    DEFAULT: '#f3f4f6',
    dark: '#e5e7eb',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    muted: '#6b7280',
  },
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const certifications = [
  {
    id: 1,
    title: "Python Programming Certificate",
    issuer: "Python Institute",
    image: "/certificates/certificate1.jpg",
    alt: "Python Programming Certificate",
    issueDate: "June 2023",
    expiryDate: "June 2025",
    certificateId: "PYTH-2023-001",
    description: "Comprehensive Python programming certification covering advanced concepts, object-oriented programming, and best practices in software development.",
    skills: ["Python", "OOP", "Algorithms", "Data Structures", "Debugging"],
    hours: 80,
    difficulty: "Intermediate",
    verified: true,
    verificationLink: "#",
    category: "Programming"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    issuer: "Data Science Council of America",
    image: "/certificates/certificate2.jpg",
    alt: "Data Science Fundamentals Certificate",
    issueDate: "August 2023",
    expiryDate: "No Expiry",
    certificateId: "DSC-2023-045",
    description: "Fundamentals of data science including data analysis, visualization, statistical methods, and machine learning basics.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis"],
    hours: 120,
    difficulty: "Advanced",
    verified: true,
    verificationLink: "#",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Web Development Mastery",
    issuer: "The Web Development Institute",
    image: "/certificates/certificate3.jpg",
    alt: "Web Development Certificate",
    issueDate: "October 2023",
    expiryDate: "October 2025",
    certificateId: "WEB-2023-112",
    description: "Full-stack web development certification covering modern frameworks, responsive design, and best practices in web development.",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "TypeScript"],
    hours: 200,
    difficulty: "Advanced",
    verified: true,
    verificationLink: "#",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Machine Learning Specialization",
    issuer: "AI & ML Academy",
    image: "/certificates/certificate4.jpg",
    alt: "Machine Learning Certificate",
    issueDate: "January 2024",
    expiryDate: "January 2026",
    certificateId: "ML-2024-008",
    description: "Advanced machine learning techniques including deep learning, neural networks, and their applications in real-world scenarios.",
    skills: ["TensorFlow", "PyTorch", "Neural Networks", "NLP", "Computer Vision", "Deep Learning"],
    hours: 180,
    difficulty: "Expert",
    verified: true,
    verificationLink: "#",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Cloud Computing Essentials",
    issuer: "Cloud Professionals Association",
    image: "/certificates/certificate5.jpg",
    alt: "Cloud Computing Certificate",
    issueDate: "March 2024",
    expiryDate: "March 2026",
    certificateId: "CCE-2024-023",
    description: "Comprehensive cloud computing certification covering major cloud platforms, infrastructure as code, and cloud-native development.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    hours: 150,
    difficulty: "Advanced",
    verified: true,
    verificationLink: "#",
    category: "Cloud Computing"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Professional Certifications</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
              I am continuously working on obtaining relevant certifications to enhance my skills and stay updated with
              the latest technologies in software development and machine learning.
            </p>
            
            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-full flex items-center space-x-2">
                        <span>View Full</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800">{cert.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
