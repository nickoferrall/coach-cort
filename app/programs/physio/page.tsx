import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaBanner } from "@/components/cta-banner"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTAButton } from "@/components/cta-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Heart, Activity, Shield, Zap, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "On-Site Physiotherapy in Etobicoke | Sports Physio & Injury Rehab | Cort Fitness",
  description:
    "Access on-site physiotherapy services at Cort Fitness Etobicoke. Sports injury rehabilitation, movement assessments, and injury prevention to keep you training pain-free.",
  keywords: [
    "physiotherapy Etobicoke",
    "sports physio Toronto",
    "injury rehabilitation near me",
    "on-site physio gym",
    "movement assessment Etobicoke",
    "injury prevention training",
    "physical therapy gym Etobicoke",
    "sports injury treatment Toronto",
    "physio at gym",
    "athletic physiotherapy GTA",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/physio",
  },
  openGraph: {
    title: "On-Site Physiotherapy in Etobicoke | Cort Fitness",
    description:
      "Access on-site physiotherapy services. Sports injury rehabilitation and injury prevention to keep you training pain-free.",
    url: "https://coachcort.com/programs/physio",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg",
        width: 1200,
        height: 630,
        alt: "On-Site Physiotherapy at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
    siteName: "Cort Fitness",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Site Physiotherapy in Etobicoke | Cort Fitness",
    description:
      "Access on-site physiotherapy services. Sports injury rehabilitation and injury prevention.",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "On-Site Physiotherapy",
  description: "On-site physiotherapy services including sports injury rehabilitation, movement assessments, and injury prevention strategies to help you move better and stay injury-free.",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "313 Evans Avenue",
      addressLocality: "Etobicoke",
      addressRegion: "ON",
      postalCode: "M8Z 1K2",
      addressCountry: "CA",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Etobicoke",
  },
  serviceType: "Physiotherapy",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What conditions can physiotherapy help with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our physiotherapy services can help with sports injuries, chronic pain, post-surgical rehabilitation, mobility issues, muscle strains, joint pain, and movement dysfunctions. We also provide preventive assessments to identify potential issues before they become injuries.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a doctor's referral for physiotherapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you don't need a referral to see our physiotherapist. However, some insurance plans may require a referral for coverage, so check with your provider.",
      },
    },
    {
      "@type": "Question",
      name: "How does on-site physio benefit my training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Having physiotherapy services on-site means seamless integration between your rehab and training. Your physio can communicate directly with your trainer, observe your movements during workouts, and make real-time recommendations to keep you training safely.",
      },
    },
  ],
}

const benefits = [
  {
    icon: Heart,
    title: "Injury Rehabilitation",
    description: "Expert treatment to get you back to training stronger than before",
  },
  {
    icon: Activity,
    title: "Movement Assessments",
    description: "Identify mobility issues and movement dysfunctions before they cause problems",
  },
  {
    icon: Shield,
    title: "Injury Prevention",
    description: "Proactive strategies to keep you healthy and training consistently",
  },
  {
    icon: Zap,
    title: "Performance Enhancement",
    description: "Optimize your movement patterns for better training outcomes",
  },
]

const included = [
  "Comprehensive movement screening",
  "Manual therapy and soft tissue work",
  "Exercise prescription for rehabilitation",
  "Pain management strategies",
  "Return-to-training planning",
  "Collaboration with your personal trainer",
  "Ongoing progress monitoring",
  "Home exercise programs",
]

const physioFaqs = [
  {
    question: "What conditions can physiotherapy help with?",
    answer: "Our physiotherapy services can help with sports injuries, chronic pain, post-surgical rehabilitation, mobility issues, muscle strains, joint pain, and movement dysfunctions. We also provide preventive assessments to identify potential issues before they become injuries.",
  },
  {
    question: "Do I need a doctor's referral for physiotherapy?",
    answer: "No, you don't need a referral to see our physiotherapist. However, some insurance plans may require a referral for coverage, so check with your provider.",
  },
  {
    question: "How does on-site physio benefit my training?",
    answer: "Having physiotherapy services on-site means seamless integration between your rehab and training. Your physio can communicate directly with your trainer, observe your movements during workouts, and make real-time recommendations to keep you training safely.",
  },
  {
    question: "How long are physiotherapy sessions?",
    answer: "Initial assessments typically last 45-60 minutes to allow for a thorough evaluation. Follow-up treatment sessions are usually 30-45 minutes depending on your treatment plan.",
  },
]

export default function PhysioPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <nav className="bg-slate-100 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li>
              <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <li className="text-foreground font-medium">Physiotherapy</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"
            alt="On-Site Physiotherapy at Cort Fitness Etobicoke"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/programs" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Programs
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              On-Site Physiotherapy
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Access professional physiotherapy services right at the gym. Whether you&apos;re recovering from an injury, dealing with chronic pain, or looking to prevent issues before they start, our on-site physio services help you move well and train pain-free.
            </p>
            <CTAButton>Book an Assessment</CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Physio Helps Your Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay healthy, move better, and train harder with expert physiotherapy support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Personal-Training-2.jpg"
                  alt="Physiotherapy treatment session at Cort Fitness"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Physio Services
                </h2>
                <ul className="space-y-4">
                  {included.map((item, index) => (
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Physiotherapy FAQs
            </h2>
            <div className="space-y-6">
              {physioFaqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Programs</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/programs/personal-training" className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Personal Training</h3>
                <p className="text-sm text-muted-foreground mt-1">Combine physio with expert training</p>
              </Link>
              <Link href="/programs/hyrox-training" className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">HYROX Training</h3>
                <p className="text-sm text-muted-foreground mt-1">Stay injury-free during competition prep</p>
              </Link>
              <Link href="/programs/youth-training" className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Youth Training</h3>
                <p className="text-sm text-muted-foreground mt-1">Movement screening for young athletes</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
