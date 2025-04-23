
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="font-bold text-xl text-blue-900">HR Leaders</span>
              <span className="font-light text-xl text-blue-500">LATAM</span>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#benefits" className="text-base font-medium text-gray-700 hover:text-blue-800">Benefits</a>
            <a href="#members" className="text-base font-medium text-gray-700 hover:text-blue-800">Members</a>
            <a href="#events" className="text-base font-medium text-gray-700 hover:text-blue-800">Events</a>
            <a href="#providers" className="text-base font-medium text-gray-700 hover:text-blue-800">Providers</a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="ghost" className="text-blue-700 hover:text-blue-800">Sign In</Button>
            <Button className="ml-4 bg-blue-800 hover:bg-blue-700 text-white">Apply Now</Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-xl text-blue-900">HR Leaders</span>
                  <span className="font-light text-xl text-blue-500">LATAM</span>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost" 
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#benefits" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Benefits</span>
                  </a>
                  <a href="#members" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Members</span>
                  </a>
                  <a href="#events" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Events</span>
                  </a>
                  <a href="#providers" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="ml-3 text-base font-medium text-gray-900">Providers</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">Apply Now</Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
