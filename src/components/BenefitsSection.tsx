
import { Check } from "lucide-react"

const benefits = [
  {
    title: "Exclusive Events & Networking",
    description: "Access to invite-only roundtables, conferences, and social gatherings with the region's top HR executives"
  },
  {
    title: "Knowledge Sharing",
    description: "Regular workshops and masterclasses led by industry experts on the latest HR trends and best practices"
  },
  {
    title: "Research & Insights",
    description: "Priority access to proprietary research, benchmarking data, and industry reports"
  },
  {
    title: "Peer Advisory",
    description: "Confidential forums to discuss challenges and collaborate on solutions with fellow HR leaders"
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Member Benefits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Gain access to resources and connections that accelerate your professional growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg">
            <p className="text-xl font-medium text-white">
              Join the top 1% of HR professionals in Latin America
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
