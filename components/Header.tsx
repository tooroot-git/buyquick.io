import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingCart className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold text-gray-800">BuyQuick.io</span>
        </div>
        <nav>
          <a href="#contact" className="text-gray-600 hover:text-primary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

