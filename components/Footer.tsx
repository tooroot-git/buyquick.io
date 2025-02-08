import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Shield className="h-6 w-6 mr-2" />
          <span>Secure Transaction</span>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} BuyQuick.io. All rights reserved. | Premium Domain Marketplace
        </p>
      </div>
    </footer>
  )
}

