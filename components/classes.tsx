"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const programs = [
  {
    slug: "personal-training",
    title: "Personal Training",
    tagline: "Transform your body",
    description:
      "One-on-one customized training programs designed to help you build muscle, lose fat, and achieve your specific fitness goals with expert guidance from our certified trainers.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg",
    objectPosition: "center",
  },
  {
    slug: "group-classes",
    title: "Group Classes",
    tagline: "Train with the community",
    description:
      "Join our energizing group fitness classes led by certified instructors. We offer classes for all fitness levels in a motivating community environment.",
    image: "/group.webp",
    objectPosition: "center 30%",
  },
  {
    slug: "youth-training",
    title: "Youth Group Training",
    tagline: "Build young athletes",
    description:
      "Specialized training programs for young athletes looking to build strength, improve performance, and develop healthy fitness habits that will last a lifetime.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg",
    objectPosition: "center",
  },
  {
    slug: "hyrox-training",
    title: "HYROX Training",
    tagline: "Push your limits",
    description:
      "Prepare for HYROX with our specialized training program. Build the endurance, strength, and skills needed to challenge yourself in the world's fastest-growing fitness race.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/hyrox.jpg",
    objectPosition: "center 30%",
  },
]

export function Classes() {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From personal training to group classes, we have programs designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={`/programs/${program.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block will-change-transform"
            >
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: program.objectPosition || "center" }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground/80 text-sm font-medium mb-1">{program.tagline}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                  <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    Learn more
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100 p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              Free Assessment
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Cort Fitness</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Book a free fitness assessment and tour of our facility. We&apos;ll discuss your goals and create a personalized plan to help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                Request More Info
              </Button>
              <p className="text-sm text-muted-foreground">Personal training • Group classes • HYROX prep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
