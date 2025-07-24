// Simulated blockchain verification service
export interface BlockchainCertificate {
  certificateId: string
  blockchainHash: string
  blockNumber: number
  timestamp: number
  smartContractAddress: string
  network: "ethereum" | "polygon" | "binance" | "avalanche"
  gasUsed: number
  verificationStatus: "verified" | "pending" | "failed"
  issuerAddress: string
  recipientAddress: string
}

export class BlockchainVerificationService {
  private static certificates: Map<string, BlockchainCertificate> = new Map([
    [
      "TGTZUC-CE000029",
      {
        certificateId: "TGTZUC-CE000029",
        blockchainHash: "0x8f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a",
        blockNumber: 18542891,
        timestamp: Date.now() - 86400000 * 30, // 30 days ago
        smartContractAddress: "0x742d35Cc6634C0532925a3b8D4C9db7C4E2b8f1A",
        network: "ethereum",
        gasUsed: 21000,
        verificationStatus: "verified",
        issuerAddress: "0x1234567890123456789012345678901234567890",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
    [
      "VSTCR2216",
      {
        certificateId: "VSTCR2216",
        blockchainHash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
        blockNumber: 45892341,
        timestamp: Date.now() - 86400000 * 15, // 15 days ago
        smartContractAddress: "0x8A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B",
        network: "polygon",
        gasUsed: 15000,
        verificationStatus: "verified",
        issuerAddress: "0x2345678901234567890123456789012345678901",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
    [
      "AWS-ACF-03092025-SY",
      {
        certificateId: "AWS-ACF-03092025-SY",
        blockchainHash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
        blockNumber: 28934567,
        timestamp: Date.now() - 86400000 * 7, // 7 days ago
        smartContractAddress: "0x9B0C1D2E3F4A5B6C7D8E9F0A1B2C3D4E5F6A7B8C",
        network: "avalanche",
        gasUsed: 18500,
        verificationStatus: "verified",
        issuerAddress: "0x3456789012345678901234567890123456789012",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
    [
      "DCF395B1 8517",
      {
        certificateId: "DCF395B1 8517",
        blockchainHash: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
        blockNumber: 19876543,
        timestamp: Date.now() - 86400000 * 45, // 45 days ago
        smartContractAddress: "0xA1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0",
        network: "ethereum",
        gasUsed: 22000,
        verificationStatus: "verified",
        issuerAddress: "0x4567890123456789012345678901234567890123",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
    [
      "373a134OLJ",
      {
        certificateId: "373a134OLJ",
        blockchainHash: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
        blockNumber: 34567890,
        timestamp: Date.now() - 86400000 * 60, // 60 days ago
        smartContractAddress: "0xB2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1",
        network: "polygon",
        gasUsed: 16800,
        verificationStatus: "verified",
        issuerAddress: "0x5678901234567890123456789012345678901234",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
    [
      "NCSE-ENRN-01884528923",
      {
        certificateId: "NCSE-ENRN-01884528923",
        blockchainHash: "0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a",
        blockNumber: 12345678,
        timestamp: Date.now() - 86400000 * 5, // 5 days ago
        smartContractAddress: "0xC3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2",
        network: "binance",
        gasUsed: 19200,
        verificationStatus: "verified",
        issuerAddress: "0x6789012345678901234567890123456789012345",
        recipientAddress: "0x0987654321098765432109876543210987654321",
      },
    ],
  ])

  static async verifyCertificate(certificateId: string): Promise<BlockchainCertificate | null> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return this.certificates.get(certificateId) || null
  }

  static getNetworkInfo(network: string) {
    const networks = {
      ethereum: { name: "Ethereum", color: "from-blue-400 to-purple-400", explorer: "etherscan.io" },
      polygon: { name: "Polygon", color: "from-purple-400 to-pink-400", explorer: "polygonscan.com" },
      binance: { name: "Binance Smart Chain", color: "from-yellow-400 to-orange-400", explorer: "bscscan.com" },
      avalanche: { name: "Avalanche", color: "from-red-400 to-pink-400", explorer: "snowtrace.io" },
    }
    return networks[network as keyof typeof networks] || networks.ethereum
  }

  static formatAddress(address: string): string {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  static formatHash(hash: string): string {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`
  }
}
