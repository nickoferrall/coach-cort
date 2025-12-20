import { Header } from "@/components/header"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Trainers - Cort Fitness Etobicoke",
  description:
    "Meet the dedicated trainers at Cort Fitness. Our experienced personal trainers, coaches, and specialists are committed to helping you achieve your fitness goals.",
  keywords: [
    "Cort Fitness trainers",
    "Coach Cort",
    "Andrew Cortellessa",
    "Etobicoke personal trainers",
    "fitness coaches Etobicoke",
    "HYROX trainers Toronto",
  ],
  alternates: {
    canonical: "https://coachcort.com/team",
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Team />
      </div>
      <Footer />
    </main>
  )
}
