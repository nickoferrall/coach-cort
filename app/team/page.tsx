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
  openGraph: {
    title: "Our Trainers - Cort Fitness Etobicoke",
    description: "Meet the dedicated trainers at Cort Fitness. Our experienced personal trainers, coaches, and specialists are committed to helping you achieve your fitness goals.",
    url: "https://coachcort.com/team",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Andrew-Cortellessa.jpg"],
  },
}

const teamJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew Cortellessa",
    alternateName: "Coach Cort",
    jobTitle: "Owner & Personal Trainer",
    worksFor: {
      "@type": "SportsActivityLocation",
      name: "Cort Fitness",
      url: "https://coachcort.com",
    },
    description: "Andrew is a personal trainer based in Etobicoke with years of experience helping clients build muscle, lose fat, and achieve their fitness goals.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Andrew-Cortellessa.jpg",
    sameAs: [
      "https://www.instagram.com/cortfitnessetob",
      "https://www.youtube.com/@cortfitness",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joseph El-Achhab",
    jobTitle: "Yoga, HIIT & Pilates Instructor",
    worksFor: {
      "@type": "SportsActivityLocation",
      name: "Cort Fitness",
    },
    description: "Joe is a yoga, handstand, arm-balance, and HIIT Pilates instructor with a passion for guiding people in movement since 2021.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Joseph-El-Achhab.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Taya Smith",
    jobTitle: "Personal Trainer & Nutrition Coach",
    worksFor: {
      "@type": "SportsActivityLocation",
      name: "Cort Fitness",
    },
    description: "Taya is a certified personal trainer and holistic nutrition coach dedicated to helping clients develop a healthy relationship with food, fitness, and their bodies.",
    image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Taya-Smith.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adam Chang",
    jobTitle: "On-Site Physio Coach",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "MScPT",
    },
    worksFor: {
      "@type": "SportsActivityLocation",
      name: "Cort Fitness",
    },
    description: "Adam is a registered physiotherapist, performance coach, and movement enthusiast with a deep passion for helping people move well and live pain-free.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      {teamJsonLd.map((person, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <Header />
      <div className="pt-32">
        <Team />
      </div>
      <Footer />
    </main>
  )
}
