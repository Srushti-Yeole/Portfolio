"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Shield, Clock, CheckCircle, AlertCircle, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlockchainVerificationService, type BlockchainCertificate } from "@/lib/blockchain-verification"

interface BlockchainModalProps {
  isOpen: boolean
  onClose: () => void
  certificateId: string
  certificateTitle: string
}

export function BlockchainModal({ isOpen, onClose, certificateId, certificateTitle }: BlockchainModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [blockchainData, setBlockchainData] = useState<BlockchainCertificate | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      verifyOnBlockchain()
    } else {
      document.body.style.overflow = "auto"
      setTimeout(() => {
        setIsVisible(false)
        setBlockchainData(null)
        setError(null)
      }, 300)
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, certificateId])

  const verifyOnBlockchain = async () => {
    setIsVerifying(true)
    setError(null)

    try {
      const data = await BlockchainVerificationService.verifyCertificate(certificateId)
      if (data) {
        setBlockchainData(data)
      } else {
        setError("Certificate not found on blockchain")
      }
    } catch (err) {
      setError("Failed to verify certificate on blockchain")
    } finally {
      setIsVerifying(false)
    }
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const openBlockchainExplorer = () => {
    if (blockchainData) {
      const networkInfo = BlockchainVerificationService.getNetworkInfo(blockchainData.network)
      window.open(`https://${networkInfo.explorer}/tx/${blockchainData.blockchainHash}`, "_blank")
    }
  }

  if (!isVisible) return null

  const networkInfo = blockchainData ? BlockchainVerificationService.getNetworkInfo(blockchainData.network) : null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-gray-900/95 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-green-400" />
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
              Blockchain Verification
            </h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-2">{certificateTitle}</h4>
            <p className="text-gray-400">Certificate ID: {certificateId}</p>
          </div>

          {isVerifying && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 px-6 py-4 rounded-full border border-blue-500/30">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                <span className="text-blue-400 font-medium">Verifying on blockchain...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 bg-red-500/10 px-6 py-4 rounded-full border border-red-500/30">
                <AlertCircle className="h-6 w-6 text-red-400" />
                <span className="text-red-400 font-medium">{error}</span>
              </div>
            </div>
          )}

          {blockchainData && networkInfo && (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 bg-green-500/10 px-6 py-4 rounded-full border border-green-500/30">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-green-400 font-medium text-lg">Certificate Verified on Blockchain</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    Blockchain Details
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Network</label>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium text-transparent bg-gradient-to-r ${networkInfo.color} bg-clip-text border border-gray-600`}
                        >
                          {networkInfo.name}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Transaction Hash</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-blue-400 text-sm bg-gray-800 px-2 py-1 rounded flex-1 overflow-hidden">
                          {BlockchainVerificationService.formatHash(blockchainData.blockchainHash)}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(blockchainData.blockchainHash, "hash")}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      {copiedField === "hash" && <span className="text-green-400 text-xs">Copied!</span>}
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Block Number</label>
                      <p className="text-white font-mono">{blockchainData.blockNumber.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Timestamp</label>
                      <div className="flex items-center gap-2 text-white">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{new Date(blockchainData.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h5 className="text-lg font-semibold text-white mb-4">Smart Contract</h5>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Contract Address</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-purple-400 text-sm bg-gray-800 px-2 py-1 rounded flex-1 overflow-hidden">
                          {BlockchainVerificationService.formatAddress(blockchainData.smartContractAddress)}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(blockchainData.smartContractAddress, "contract")}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      {copiedField === "contract" && <span className="text-green-400 text-xs">Copied!</span>}
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Issuer Address</label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-yellow-400 text-sm bg-gray-800 px-2 py-1 rounded flex-1 overflow-hidden">
                          {BlockchainVerificationService.formatAddress(blockchainData.issuerAddress)}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(blockchainData.issuerAddress, "issuer")}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      {copiedField === "issuer" && <span className="text-green-400 text-xs">Copied!</span>}
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Gas Used</label>
                      <p className="text-white">{blockchainData.gasUsed.toLocaleString()} gas</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Status</label>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 capitalize">{blockchainData.verificationStatus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={openBlockchainExplorer}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on {networkInfo.name} Explorer
                </Button>
                <Button
                  variant="outline"
                  className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-transparent"
                  onClick={() => copyToClipboard(blockchainData.blockchainHash, "verification")}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Verification Data
                </Button>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <h6 className="text-green-400 font-semibold mb-1">Blockchain Security Guarantee</h6>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      This certificate is permanently recorded on the {networkInfo.name} blockchain, ensuring its
                      authenticity and preventing tampering. The cryptographic hash and smart contract verification
                      provide immutable proof of issuance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
