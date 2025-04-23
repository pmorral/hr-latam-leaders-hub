
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const members = [
  {
    name: "Gabriela Mendez",
    title: "CHRO at TechLatam",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Carlos Fuentes",
    title: "VP of HR at Banco Latino",
    country: "Colombia",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Sofia Ramos",
    title: "HR Director at Global Shipping",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Miguel Alvarez",
    title: "Chief People Officer at InnovateSA",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
]

export default function MembersSection() {
  return (
    <section id="members" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Distinguished Members
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join a network of the most influential HR professionals across Latin America
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <Avatar className="w-24 h-24 border-2 border-blue-100">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.title}</p>
              <Badge variant="gold" className="mt-2">{member.country}</Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex -space-x-2 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <Avatar key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
                <AvatarFallback className="bg-blue-800 text-xs text-white">+</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="ml-4 text-sm font-medium text-gray-500">
            And <span className="text-blue-800 font-bold">240+ more</span> HR leaders
          </p>
        </div>
      </div>
    </section>
  )
}
