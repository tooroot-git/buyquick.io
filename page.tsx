import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

