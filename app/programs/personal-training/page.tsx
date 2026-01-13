import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Dumbbell, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { RequestInfoButton } from "@/components/request-info-button"

export const metadata: Metadata = {
  title: "Personal Training in Etobicoke | Cort Fitness - 1-on-1 Custom Programs",
  description:
    "Get personalized one-on-one personal training in Etobicoke at Cort Fitness. Custom workout programs, nutrition guidance, and expert coaching to help you build muscle, lose fat, and achieve your fitness goals.",
  keywords: [
    "personal training Etobicoke",
    "personal trainer Etobicoke",
    "one on one training Etobicoke",
    "custom workout programs",
    "fitness coaching Etobicoke",
    "strength training Etobicoke",
    "muscle building Etobicoke",
    "weight loss trainer Etobicoke",
    "certified personal trainer",
    "Coach Cort",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/personal-training",
  },
  openGraph: {
    title: "Personal Training in Etobicoke | Cort Fitness",
    description:
      "Get personalized one-on-one personal training at Cort Fitness. Custom workout programs, nutrition guidance, and expert coaching.",
    url: "https://coachcort.com/programs/personal-training",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Training at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Training in Etobicoke | Cort Fitness",
    description:
      "Get personalized one-on-one personal training at Cort Fitness. Custom workout programs, nutrition guidance, and expert coaching.",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personal Training",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
  },
  serviceType: "Personal Training",
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  description:
    "One-on-one customized personal training programs designed to help you build muscle, lose fat, and achieve your specific fitness goals with expert guidance.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
}

const benefits = [
  {
    icon: Target,
    title: "Custom Programming",
    description: "Every workout is designed specifically for your goals, fitness level, and schedule",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Regular assessments and adjustments to ensure you're always moving forward",
  },
  {
    icon: Dumbbell,
    title: "Expert Coaching",
    description: "Learn proper form and technique from certified trainers to maximize results",
  },
  {
    icon: Users,
    title: "Accountability Partner",
    description: "Your trainer keeps you motivated and on track even when life gets busy",
  },
]

const includes = [
  "Initial fitness assessment and goal setting",
  "Personalized workout programs updated regularly",
  "Nutrition guidance and meal planning tips",
  "Form corrections and technique coaching",
  "Progress photos and measurement tracking",
  "Flexible scheduling to fit your lifestyle",
  "Access to gym facilities during sessions",
  "Ongoing support via text/email between sessions",
]

export default function PersonalTrainingPage() {
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
                Personal Training
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Work one-on-one with our expert trainers to build muscle, lose fat, and achieve your specific fitness goals faster than you ever thought possible.
              </p>
              <RequestInfoButton className="bg-primary hover:bg-primary/90 text-primary-foreground" />
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"
                  alt="Personal Training at Cort Fitness"
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
              Why Choose Personal Training?
            </h2>
            <p className="text-lg text-muted-foreground">
              Personal training is the fastest path to your fitness goals. With customized programming and expert guidance, you&apos;ll see results faster and avoid the common mistakes that hold most people back.
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
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Personal-Training-2.jpg"
                  alt="Personal trainer working with client"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What&apos;s Included
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our personal training packages include everything you need to transform your body and achieve lasting results.
                </p>
                <ul className="space-y-4">
                  {includes.map((item, index) => (
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
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free fitness assessment today and let&apos;s create a plan to help you achieve your goals.
          </p>
          <RequestInfoButton variant="secondary" className="bg-white text-primary hover:bg-white/90" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
