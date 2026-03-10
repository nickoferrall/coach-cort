import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  CheckCircle,
  Zap,
  RotateCcw,
  Dumbbell,
  ShieldCheck,
  Users,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react"
import Image from "next/image"
import { RequestInfoButton } from "@/components/request-info-button"

export const metadata: Metadata = {
  title:
    "Off-Ice Hockey Performance Camp in Etobicoke | Cort Fitness - Ages 10-16",
  description:
    "4-month off-ice hockey training program for players ages 10-16 in Etobicoke. Build speed, agility, strength, and explosiveness that translates directly to on-ice performance. Small groups of 8 at 313 Evans Avenue.",
  keywords: [
    "off-ice hockey training Etobicoke",
    "hockey performance camp Toronto",
    "youth hockey training",
    "off-ice training for hockey players",
    "hockey speed and agility",
    "hockey strength training",
    "hockey camp Etobicoke",
    "youth hockey development",
    "hockey injury prevention",
    "off-ice hockey program",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/off-ice-hockey",
  },
  openGraph: {
    title: "Off-Ice Hockey Performance Camp in Etobicoke | Cort Fitness",
    description:
      "4-month off-ice development program for hockey players ages 10-16. Build speed, strength, and explosiveness in small groups of 8.",
    url: "https://coachcort.com/programs/off-ice-hockey",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg",
        width: 1200,
        height: 630,
        alt: "Off-Ice Hockey Performance Camp at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Ice Hockey Performance Camp in Etobicoke | Cort Fitness",
    description:
      "4-month off-ice development program for hockey players ages 10-16. Build speed, strength, and explosiveness in small groups of 8.",
    images: [
      "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg",
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Off-Ice Hockey Performance Camp",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
  },
  serviceType: "Off-Ice Hockey Training",
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  description:
    "A 4-month off-ice development program for hockey players ages 10-16, focusing on speed, agility, strength, and injury prevention.",
  audience: {
    "@type": "Audience",
    audienceType: "Youth Hockey Players (Ages 10-16)",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
}

const benefits = [
  {
    icon: Zap,
    title: "Speed & Acceleration",
    description:
      "Develop explosive first-step quickness and top-end skating speed through sprint mechanics and power training",
  },
  {
    icon: RotateCcw,
    title: "Agility & Change of Direction",
    description:
      "Improve lateral movement, crossovers, and rapid direction changes that mirror on-ice demands",
  },
  {
    icon: Dumbbell,
    title: "Strength & Power",
    description:
      "Build functional strength for harder shots, stronger battles on the boards, and more powerful strides",
  },
  {
    icon: ShieldCheck,
    title: "Injury Prevention",
    description:
      "Strengthen muscles, joints, and connective tissue to reduce common hockey injuries and extend playing careers",
  },
]

const sessionBreakdown = [
  "Dynamic warm-up and movement preparation",
  "Speed and agility drills (hockey-specific patterns)",
  "Strength and power development",
  "Conditioning and work capacity",
  "Cool-down and mobility",
]

const differentiators = [
  {
    icon: Users,
    title: "Small Groups of 8",
    description:
      "Every athlete gets individual attention and coaching cues throughout each session",
  },
  {
    icon: Target,
    title: "Hockey-Specific Training",
    description:
      "Every drill and exercise is selected to improve on-ice performance",
  },
  {
    icon: TrendingUp,
    title: "4-Month Progressive Program",
    description:
      "Structured phases that build on each other for continuous improvement over the full program",
  },
  {
    icon: Clock,
    title: "Translates to On-Ice Performance",
    description:
      "Training designed so gains in the gym show up as faster skating, harder shots, and better endurance on the ice",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Age-Appropriate",
    description:
      "All exercises are selected and scaled for developing athletes ages 10-16",
  },
]

export default function OffIceHockeyPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Ages 10-16
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Off-Ice Hockey Performance Camp
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                A 4-month off-ice development program designed to build the
                speed, strength, and explosiveness that hockey players need to
                dominate on the ice.
              </p>
              <RequestInfoButton className="bg-primary hover:bg-primary/90 text-primary-foreground" />
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/coaching-boys.jpg"
                  alt="Off-Ice Hockey Performance Camp at Cort Fitness"
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
              Train Every Edge of Your Game
            </h2>
            <p className="text-lg text-muted-foreground">
              Our program targets the four key areas that separate good hockey
              players from great ones. Each focus area is trained with
              hockey-specific exercises and progressions.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
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
                  Program Details
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Athletes train 2-3 sessions per week, each lasting 60 minutes.
                  Every session follows a structured format designed to maximize
                  development.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Each session includes:
                </p>
                <ul className="space-y-4">
                  {sessionBreakdown.map((item, index) => (
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
                  alt="Hockey athletes in off-ice training"
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes This Camp Different
            </h2>
            <p className="text-lg text-muted-foreground">
              This isn&apos;t generic fitness training. Every aspect of the
              program is built for hockey players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about the Off-Ice Hockey Performance Camp
            and secure your spot. Spaces are limited to 8 athletes per group.
          </p>
          <RequestInfoButton
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
