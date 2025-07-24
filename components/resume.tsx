"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Eye, X, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function Resume() {
  const [showPdf, setShowPdf] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const resumePdf = "/SrushtiYeole (3).pdf"
  const resumeImage = "/re.jpg"
  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'SrushtiYeole_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handleViewResume = () => {
    setShowPdf(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closePdfViewer = () => {
    setShowPdf(false)
    document.body.style.overflow = 'auto'
  }
  
  const openImageViewer = () => {
    setShowImage(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closeImageViewer = () => {
    setShowImage(false)
    document.body.style.overflow = 'auto'
  }
  return (
    <section id="resume" className="py-20 px-6 relative">
      {/* Image Viewer Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4" onClick={closeImageViewer}>
          <div className="w-full max-w-4xl h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={closeImageViewer}
                className="flex items-center text-white hover:text-pink-400 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Back to Resume
              </button>
              <button 
                onClick={closeImageViewer}
                className="text-white hover:text-pink-400 transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={resumeImage}
                  alt="Resume"
                  fill
                  className="object-contain"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeImage;
                  link.download = 'SrushtiYeole_Resume_Image.jpg';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Image
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* PDF Viewer Modal */}
      {showPdf && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-6xl h-full flex flex-col">
            {/* Header with back button */}
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={closePdfViewer}
                className="flex items-center text-white hover:text-pink-400 transition-colors"
                aria-label="Back to resume"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Back to Resume
              </button>
              <button 
                onClick={closePdfViewer}
                className="text-white hover:text-pink-400 transition-colors"
                aria-label="Close PDF viewer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* PDF Container */}
            <div className="flex-1 bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
              <iframe 
                src={`${resumePdf}#view=fitH`} 
                className="w-full h-full"
                title="Srushti Yeole's Resume"
              />
            </div>
            
            {/* Download button at bottom */}
            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleDownload}
                className="bg-pink-500 hover:bg-pink-600 text-white flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
            Resume
          </h2>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/50 hover:border-pink-400/50 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Download className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-4">
                Download My Resume
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Get a detailed overview of my education, skills, experience, and projects. My resume includes
                comprehensive information about my technical expertise and achievements.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  onClick={handleViewResume}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg w-full lg:w-auto"
                >
                  <Eye className="mr-3 h-5 w-5" />
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownload}
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black px-8 py-4 text-lg w-full lg:w-auto bg-transparent ml-0 lg:ml-4"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="relative group w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-pink-400/50 transition-all duration-300 cursor-pointer"
                onClick={openImageViewer}
              >
                <div className="relative w-full h-96">
                  <Image
                    src={resumeImage}
                    alt="Srushti Yeole's Resume"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Eye className="w-12 h-12 mx-auto text-white mb-2" />
                      <p className="text-white font-medium text-lg">View Full Size</p>
                      <p className="text-gray-200 text-sm mt-1">Click to enlarge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
