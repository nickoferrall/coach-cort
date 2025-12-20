import { Header } from "@/components/header"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Proehlific Park",
  description:
    "Meet the dedicated team at Proehlific Park. Our experienced directors, trainers, and staff are committed to helping you and your family achieve your fitness and athletic goals.",
  keywords: [
    "Proehlific Park team",
    "Ricky Proehl",
    "Greensboro fitness trainers",
    "sports coaches Greensboro",
    "personal trainers Greensboro",
  ],
  alternates: {
    canonical: "https://proehlificpark.com/team",
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

