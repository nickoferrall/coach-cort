"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What programs does Cort Fitness offer?",
    answer:
      "Cort Fitness offers personal training, group fitness classes, youth group training, and specialized HYROX competition training. All our programs are designed to help you build muscle, lose fat, and achieve your fitness goals with expert guidance.",
  },
  {
    question: "Do you offer a free assessment?",
    answer:
      "Yes! We offer a complimentary fitness assessment for all new clients. During your free assessment, we'll discuss your goals, evaluate your current fitness level, and create a personalized plan to help you succeed. It's the perfect way to see if Cort Fitness is right for you.",
  },
  {
    question: "What is HYROX training?",
    answer:
      "HYROX is the world's largest fitness race, combining 8km of running with 8 functional workout stations including sled pushes, rowing, wall balls, and more. Our HYROX training program prepares you to compete at any level, whether you're a first-timer or looking to improve your time.",
  },
  {
    question: "Who are the trainers at Cort Fitness?",
    answer:
      "Our team includes Andrew Cortellessa (Owner & Personal Trainer), Joseph El-Achhab (Yoga, HIIT & Pilates Instructor), Taya Smith (Personal Trainer & Nutrition Coach), and Adam Chang (On-Site Physio Coach). Each trainer brings unique expertise to help you reach your goals.",
  },
  {
    question: "Where is Cort Fitness located?",
    answer:
      "Cort Fitness is located at 313 Evans Avenue in Etobicoke, Ontario M8Z 1K2. We're easily accessible and have convenient parking. Stop by for a tour and see our facility for yourself!",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We're open Monday through Friday from 6:00 AM to 9:00 PM, Saturday from 8:00 AM to 4:00 PM, and Sunday from 9:00 AM to 2:00 PM. Contact us to schedule your free assessment at a time that works for you.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Cort Fitness
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-white rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-bold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
