import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BuyQuick.io is for sale!</h1>
        <p className="text-xl md:text-2xl mb-8">The ultimate brand for fast and easy online shopping</p>
        <div className="mb-8">
          <span className="text-3xl md:text-5xl font-bold">$9,999</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Buy Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            Make an Offer
          </Button>
        </div>
      </div>
    </section>
  )
}

