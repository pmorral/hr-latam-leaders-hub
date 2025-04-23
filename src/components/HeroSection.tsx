
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0 opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
        <div className="flex flex-col items-center justify-center text-center">
          <Badge variant="blue" className="mb-6 px-4 py-1.5 text-sm">+250 Exclusive Members</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">HR Leaders LATAM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12">
            The exclusive community for HR executives transforming workplaces across Latin America
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-700 text-white">
              Apply for Membership <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
