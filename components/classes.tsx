"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const programs = [
  {
    title: "Personal Training",
    description:
      "One-on-one customized training programs designed to help you build muscle, lose fat, and achieve your specific fitness goals with expert guidance from our certified trainers.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/strength-training-in-Etobicoke-279572.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our personal training programs are tailored specifically to your goals, fitness level, and schedule. Work one-on-one with our expert trainers to achieve results faster.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">What&apos;s Included:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Custom Programming:</strong> Workouts designed for your specific goals</li>
            <li><strong>Nutrition Guidance:</strong> Learn how to eat for your goals</li>
            <li><strong>Progress Tracking:</strong> Regular assessments to measure results</li>
            <li><strong>Accountability:</strong> Your trainer keeps you on track</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Group Classes",
    description:
      "Join our energizing group fitness classes led by certified instructors. From HIIT to yoga, we offer classes for all fitness levels in a motivating community environment.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/Personal-Training-2-185233.png",
    objectPosition: "center 30%",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our group classes provide the energy and motivation of training with others while still getting expert instruction. Classes are designed for all fitness levels.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Class Options:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>HIIT Training:</strong> High-intensity interval workouts for maximum results</li>
            <li><strong>Yoga:</strong> Improve flexibility, balance, and mental clarity</li>
            <li><strong>Pilates:</strong> Core-focused strength and stability training</li>
            <li><strong>Strength Classes:</strong> Build muscle in a group setting</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Youth Group Training",
    description:
      "Specialized training programs for young athletes looking to build strength, improve performance, and develop healthy fitness habits that will last a lifetime.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/coaching-boys-280787.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our youth programs are designed to help young athletes build a foundation of strength, coordination, and healthy habits. Training is age-appropriate and fun.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Athletic Development:</strong> Build speed, strength, and agility</li>
            <li><strong>Sport-Specific Training:</strong> Improve performance in your sport</li>
            <li><strong>Confidence Building:</strong> Develop mental toughness</li>
            <li><strong>Team Environment:</strong> Train with peers in a supportive setting</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "HYROX Training",
    description:
      "Prepare for HYROX competitions with our specialized training program. Build the endurance, strength, and skills needed to compete at the highest level in this growing fitness race.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/hyrox-291192.jpeg",
    objectPosition: "center 30%",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          HYROX is the world&apos;s largest fitness race, combining running with functional workout stations. Our training program prepares you to compete and excel.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Focus:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Running Endurance:</strong> Build the stamina for 8km of running</li>
            <li><strong>Functional Fitness:</strong> Master sled pushes, wall balls, rowing, and more</li>
            <li><strong>Competition Prep:</strong> Race-specific strategies and pacing</li>
            <li><strong>Community:</strong> Train with other HYROX athletes</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)

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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: program.objectPosition || "center" }}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-auto cursor-pointer"
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
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

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProgram?.title}</DialogTitle>
            <div className="text-base leading-relaxed pt-4">{selectedProgram?.fullDescription}</div>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => {
                setSelectedProgram(null)
                scrollToForm()
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Get Started
            </Button>
            <Button onClick={() => setSelectedProgram(null)} variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
