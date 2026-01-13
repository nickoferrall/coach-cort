import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Zap, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RequestInfoButton } from "@/components/request-info-button"

export const metadata: Metadata = {
  title: "Group Fitness Classes in Etobicoke | Cort Fitness",
  description:
    "Join energizing group fitness classes at Cort Fitness in Etobicoke. Strength and conditioning classes led by certified instructors. All fitness levels welcome.",
  keywords: [
    "group fitness classes Etobicoke",
    "strength classes Etobicoke",
    "fitness classes near me",
    "group workout Etobicoke",
    "conditioning classes Etobicoke",
    "Cort Fitness",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/group-classes",
  },
  openGraph: {
    title: "Group Fitness Classes in Etobicoke | Cort Fitness",
    description:
      "Join energizing group fitness classes at Cort Fitness. Strength and conditioning classes led by certified instructors.",
    url: "https://coachcort.com/programs/group-classes",
    images: [
      {
        url: "/group.webp",
        width: 1200,
        height: 630,
        alt: "Group Fitness Classes at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Fitness Classes in Etobicoke | Cort Fitness",
    description:
      "Join energizing group fitness classes at Cort Fitness. Strength and conditioning classes led by certified instructors.",
    images: ["/group.webp"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Group Fitness Classes",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
  },
  serviceType: "Group Fitness Classes",
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  description:
    "Energizing group fitness classes led by certified instructors for all fitness levels.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
}

const classTypes = [
  {
    icon: Zap,
    title: "Strength Training",
    description: "Build lean muscle and increase strength in a motivating group environment with expert guidance",
  },
  {
    icon: Heart,
    title: "Conditioning",
    description: "Improve cardiovascular fitness and endurance with challenging full-body workouts",
  },
  {
    icon: Users,
    title: "Community Environment",
    description: "Train alongside like-minded people who push each other to be their best",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Multiple class times throughout the week to fit your busy schedule",
  },
]

const benefits = [
  "Motivating group energy keeps you pushing harder",
  "Expert instruction ensures proper form and safety",
  "Variety of class types to keep workouts fresh",
  "Flexible schedule with multiple class times",
  "All fitness levels welcome - modifications provided",
  "Build community with like-minded people",
  "More affordable than personal training",
  "Structured workouts - just show up and work",
]

export default function GroupClassesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 md:pt-40 pb-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="py-8 lg:py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Group Classes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Join our energizing group classes led by certified instructors. Train with the community and reach your fitness goals together.
              </p>
              <RequestInfoButton className="bg-primary hover:bg-primary/90 text-primary-foreground" />
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/group.webp"
                  alt="Group Fitness Classes at Cort Fitness"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Group Classes?
            </h2>
            <p className="text-lg text-muted-foreground">
              Group training combines expert coaching with the motivation of training alongside others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {classTypes.map((classType, index) => {
              const Icon = classType.icon
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{classType.title}</h3>
                  <p className="text-muted-foreground text-sm">{classType.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"
                  alt="Group fitness class in action"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Group Classes Work
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  There&apos;s something special about working out with others. The energy, the accountability, and the community make group classes one of the most effective ways to stay consistent with your fitness routine.
                </p>
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join a Class?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our class schedule and find the perfect time that fits your routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#schedule">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                View Schedule
              </Button>
            </Link>
            <RequestInfoButton className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
