import { CheckCircle, Zap, DollarSign, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Premium Domain",
      description: "Short, memorable, and brandable",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Loading",
      description: "Perfect for e-commerce and quick transactions",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "High Value",
      description: "Invest in a domain that sells itself",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Broad Appeal",
      description: "Suitable for various online businesses",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why BuyQuick.io?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

