import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Interested? Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message or Offer" rows={4} required />
          </div>
          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </div>
    </section>
  )
}

