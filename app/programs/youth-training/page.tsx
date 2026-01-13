import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, GraduationCap, Shield, Target, Trophy } from "lucide-react"
import Image from "next/image"
import { RequestInfoButton } from "@/components/request-info-button"

export const metadata: Metadata = {
  title: "Youth Athletic Training in Etobicoke | Cort Fitness - Kids & Teen Programs",
  description:
    "Specialized youth athletic training in Etobicoke for kids and teens. Build strength, speed, and confidence with age-appropriate programs designed by certified trainers at Cort Fitness.",
  keywords: [
    "youth training Etobicoke",
    "kids fitness Etobicoke",
    "teen athletic training",
    "youth sports training Etobicoke",
    "kids strength training",
    "youth fitness program",
    "athletic development Etobicoke",
    "kids gym Etobicoke",
    "teen fitness classes",
    "youth athlete training",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/youth-training",
  },
  openGraph: {
    title: "Youth Athletic Training in Etobicoke | Cort Fitness",
    description:
      "Specialized youth athletic training for kids and teens. Build strength, speed, and confidence with age-appropriate programs.",
    url: "https://coachcort.com/programs/youth-training",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg",
        width: 1200,
        height: 630,
        alt: "Youth Athletic Training at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Athletic Training in Etobicoke | Cort Fitness",
    description:
      "Specialized youth athletic training for kids and teens. Build strength, speed, and confidence with age-appropriate programs.",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Youth Group Training",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
  },
  serviceType: "Youth Athletic Training",
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  description:
    "Specialized training programs for young athletes to build strength, speed, coordination, and healthy fitness habits.",
  audience: {
    "@type": "Audience",
    audienceType: "Youth Athletes",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
}

const benefits = [
  {
    icon: Trophy,
    title: "Athletic Development",
    description: "Build speed, strength, agility, and coordination for better sports performance",
  },
  {
    icon: GraduationCap,
    title: "Proper Foundation",
    description: "Learn correct movement patterns and techniques that will serve them for life",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Strengthen muscles and joints to reduce injury risk during sports and activities",
  },
  {
    icon: Target,
    title: "Confidence Building",
    description: "Develop mental toughness and self-confidence that translates to all areas of life",
  },
]

const programFeatures = [
  "Age-appropriate training programs",
  "Focus on fundamental movement patterns",
  "Speed and agility development",
  "Sport-specific conditioning available",
  "Small group sizes for personalized attention",
  "Fun, engaging workouts kids enjoy",
  "Building healthy habits for life",
  "Supportive team environment",
]

export default function YouthTrainingPage() {
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
                Youth Training
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Help your child build strength, speed, and confidence with our specialized youth training programs designed for kids and teens.
              </p>
              <RequestInfoButton className="bg-primary hover:bg-primary/90 text-primary-foreground" />
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg"
                  alt="Youth Training at Cort Fitness"
                  fill
                  className="object-cover"
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
              Why Youth Training Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              The right training at a young age builds a foundation for athletic success and lifelong fitness. Our programs are designed specifically for developing bodies and minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Youth Program
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our youth training programs are designed to be fun, engaging, and effective. We focus on building a strong athletic foundation while keeping kids motivated and excited about fitness.
                </p>
                <ul className="space-y-4">
                  {programFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg"
                  alt="Youth athletes training"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                For Parents
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand that trusting someone with your child&apos;s fitness development is a big decision. Our trainers are experienced in working with young athletes and prioritize safety, proper technique, and positive reinforcement.
              </p>
              <p className="text-muted-foreground">
                All training is age-appropriate and designed to develop healthy habits that will benefit your child for years to come. We focus on making fitness fun while building real athletic skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Give Your Child the Athletic Edge
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our youth training programs and schedule a trial session.
          </p>
          <RequestInfoButton variant="secondary" className="bg-white text-primary hover:bg-white/90" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
