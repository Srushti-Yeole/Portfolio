"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, QrCode, CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlockchainModal } from "@/components/ui/blockchain-modal"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: {
    title: string
    issuer: string
    image: string
    verificationLink?: string
    certificateId?: string
    issueDate?: string
    qrCodeImage?: string
  }
}

export function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [showBlockchainModal, setShowBlockchainModal] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      setTimeout(() => {
        setIsVisible(false)
        setIsVerified(false)
      }, 300)
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleVerify = () => {
    setIsVerifying(true)
    // Simulate verification process
    setTimeout(() => {
      setIsVerified(true)
      setIsVerifying(false)
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      >
        <div
          className={`bg-gray-900/90 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
              Certificate Verification
            </h3>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className="w-full rounded-lg border border-gray-700 shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{certificate.title}</h4>
                  <p className="text-gray-300">Issued by: {certificate.issuer}</p>
                  {certificate.issueDate && <p className="text-gray-400 text-sm">Issued on: {certificate.issueDate}</p>}
                </div>

                {certificate.certificateId && (
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-gray-300 text-sm mb-2">Certificate ID:</p>
                    <p className="text-pink-400 font-mono bg-gray-800 p-2 rounded border border-gray-700 text-sm overflow-auto">
                      {certificate.certificateId}
                    </p>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className={`bg-white p-4 rounded-lg mb-4 ${isVerifying ? "qr-scanner" : ""}`}>
                    {certificate.qrCodeImage ? (
                      <img src={certificate.qrCodeImage || "/placeholder.svg"} alt="QR Code" className="w-32 h-32" />
                    ) : (
                      <div className="w-32 h-32 flex items-center justify-center bg-gray-100">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm text-center mb-4">
                    Scan this QR code to verify the authenticity of this certificate
                  </p>

                  {isVerified ? (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/30 mb-4">
                      <CheckCircle className="h-5 w-5" />
                      <span>Certificate Verified</span>
                    </div>
                  ) : (
                    <Button
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white mb-4"
                      onClick={handleVerify}
                      disabled={isVerifying}
                    >
                      {isVerifying ? (
                        <>
                          <span className="animate-pulse">Verifying...</span>
                        </>
                      ) : (
                        <>
                          <QrCode className="h-4 w-4 mr-2" />
                          Verify Certificate
                        </>
                      )}
                    </Button>
                  )}

                  <div className="w-full space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                      onClick={() => setShowBlockchainModal(true)}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Verify on Blockchain
                    </Button>

                    {certificate.verificationLink && (
                      <Button
                        variant="outline"
                        className="w-full border-pink-400/50 text-pink-400 hover:bg-pink-400/10 bg-transparent"
                        onClick={() => window.open(certificate.verificationLink, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Verification Page
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlockchainModal
        isOpen={showBlockchainModal}
        onClose={() => setShowBlockchainModal(false)}
        certificateId={certificate.certificateId || ""}
        certificateTitle={certificate.title}
      />
    </>
  )
}
