
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const testimonials = [
  {
    quote: "Being part of HR Leaders LATAM has transformed my approach to talent management and connected me with incredible professionals across the region.",
    author: "Elena Rodriguez",
    title: "HR Director, Mercado Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "The quality of discussions and level of expertise in this community is unmatched. It's been invaluable for navigating complex workforce challenges.",
    author: "Javier Morales",
    title: "CHRO, Tecnol SA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "Since joining HR Leaders LATAM, I've implemented several innovative strategies shared by peers that have significantly improved our retention rates.",
    author: "Luisa Vargas",
    title: "People Operations Lead, StartupX",
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  },
]

export default function TestimonialsSection() {
  return (
    <section id="events" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from HR leaders who have transformed their careers through our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-blue-50 border-blue-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <svg className="h-12 w-12 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <Avatar className="h-14 w-14 border-2 border-white shadow">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-medium text-lg mt-4">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
