
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Users } from "lucide-react"

export default function ProviderSection() {
  return (
    <section id="providers" className="py-16 sm:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We carefully select partners and providers who deliver exceptional value to our HR community of +250 leaders across Latin America.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Access Top Decision Makers</h3>
                  <p className="mt-2 text-base text-gray-500">Connect directly with HR executives who have purchasing authority in their organizations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Showcase Your Solutions</h3>
                  <p className="mt-2 text-base text-gray-500">Present your products and services to an engaged audience actively seeking innovation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Build Lasting Relationships</h3>
                  <p className="mt-2 text-base text-gray-500">Develop meaningful connections beyond transactional engagements</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <Input id="company" placeholder="Your company" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can you add value to our community?</label>
                <Textarea id="message" placeholder="Tell us about your services and how they benefit HR leaders" rows={4} />
              </div>
              
              <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">Send Message</Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                We'll get back to you within 48 hours to discuss partnership opportunities
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
