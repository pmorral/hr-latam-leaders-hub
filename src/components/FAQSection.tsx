
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is HR Leaders LATAM?",
    answer: "HR Leaders LATAM is an exclusive network of senior HR professionals across Latin America, fostering collaboration, knowledge sharing, and professional development in the region."
  },
  {
    question: "How can I join the network?",
    answer: "Membership is by invitation only and is reserved for senior HR professionals with significant experience in Latin American markets. You can request an invitation through our application process."
  },
  {
    question: "What benefits do members receive?",
    answer: "Members gain access to exclusive events, networking opportunities, resource sharing, mentorship programs, and collaborative platforms to connect with other HR leaders across Latin America."
  },
  {
    question: "Is membership region-specific?",
    answer: "Yes, our network focuses specifically on Latin America to address unique regional challenges and opportunities in HR management and organizational development."
  },
  {
    question: "Do you offer corporate memberships?",
    answer: "Yes, we offer corporate memberships for organizations looking to enroll multiple HR leaders. Contact us for more information about corporate rates and benefits."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about HR Leaders LATAM
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
