import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaBanner } from "@/components/cta-banner"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTAButton } from "@/components/cta-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Apple, TrendingUp, LineChart, Utensils, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nutrition Coaching in Etobicoke | Meal Planning & Diet Guidance | Cort Fitness",
  description:
    "Transform your nutrition with personalized coaching in Etobicoke. Custom meal plans, macro tracking guidance, and sustainable eating habits to fuel your fitness goals at Cort Fitness.",
  keywords: [
    "nutrition coaching Etobicoke",
    "meal planning Toronto",
    "diet coach near me",
    "macro coaching Etobicoke",
    "weight loss nutrition program",
    "sports nutrition coaching",
    "healthy eating guidance Toronto",
    "nutrition for fitness Etobicoke",
    "personalized meal plans",
    "nutrition counseling GTA",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/nutrition-coaching",
  },
  openGraph: {
    title: "Nutrition Coaching in Etobicoke | Cort Fitness",
    description:
      "Transform your nutrition with personalized coaching. Custom meal plans and sustainable eating habits to fuel your fitness goals.",
    url: "https://coachcort.com/programs/nutrition-coaching",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Personal-Training-2.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrition Coaching at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
    siteName: "Cort Fitness",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition Coaching in Etobicoke | Cort Fitness",
    description:
      "Transform your nutrition with personalized coaching. Custom meal plans and sustainable eating habits.",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Personal-Training-2.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nutrition Coaching",
  description: "Personalized nutrition coaching to help you understand how to fuel your body properly, create sustainable eating habits, and reach your fitness goals faster with expert guidance.",
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
  serviceType: "Nutrition Coaching",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to follow a strict diet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No! Our nutrition coaching focuses on sustainable eating habits that fit your lifestyle. We don't believe in restrictive diets - instead, we teach you how to make better food choices while still enjoying the foods you love.",
      },
    },
    {
      "@type": "Question",
      name: "How does nutrition coaching work at Cort Fitness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a comprehensive assessment of your current eating habits, goals, and lifestyle. From there, we create a personalized nutrition plan and provide ongoing support through regular check-ins, meal planning guidance, and adjustments based on your progress.",
      },
    },
    {
      "@type": "Question",
      name: "Can nutrition coaching help with weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Proper nutrition is the foundation of sustainable weight loss. Our coaches help you understand calorie balance, macronutrients, and how to create the right deficit while still fueling your workouts and maintaining muscle mass.",
      },
    },
  ],
}

const benefits = [
  {
    icon: Apple,
    title: "Personalized Plans",
    description: "Custom meal plans designed around your preferences, schedule, and fitness goals",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Regular check-ins to monitor your progress and make adjustments as needed",
  },
  {
    icon: Utensils,
    title: "Sustainable Habits",
    description: "Learn to make better food choices without restrictive dieting",
  },
  {
    icon: TrendingUp,
    title: "Performance Fuel",
    description: "Optimize your nutrition to support training and maximize results",
  },
]

const included = [
  "Initial nutrition assessment and goal setting",
  "Personalized macro targets and calorie guidance",
  "Custom meal plan templates and recipes",
  "Grocery shopping lists and meal prep tips",
  "Regular check-ins and plan adjustments",
  "Education on reading nutrition labels",
  "Strategies for eating out and social events",
  "Ongoing support and accountability",
]

const nutritionFaqs = [
  {
    question: "Do I need to follow a strict diet?",
    answer: "No! Our nutrition coaching focuses on sustainable eating habits that fit your lifestyle. We don't believe in restrictive diets - instead, we teach you how to make better food choices while still enjoying the foods you love.",
  },
  {
    question: "How does nutrition coaching work at Cort Fitness?",
    answer: "We start with a comprehensive assessment of your current eating habits, goals, and lifestyle. From there, we create a personalized nutrition plan and provide ongoing support through regular check-ins, meal planning guidance, and adjustments based on your progress.",
  },
  {
    question: "Can nutrition coaching help with weight loss?",
    answer: "Absolutely. Proper nutrition is the foundation of sustainable weight loss. Our coaches help you understand calorie balance, macronutrients, and how to create the right deficit while still fueling your workouts and maintaining muscle mass.",
  },
  {
    question: "Do I need to track calories or macros?",
    answer: "While tracking can be a helpful tool, it's not required. We'll work with you to find an approach that fits your lifestyle - whether that's detailed tracking, portion-based guidelines, or intuitive eating strategies.",
  },
]

export default function NutritionCoachingPage() {
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
            <li className="text-foreground font-medium">Nutrition Coaching</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/Personal-Training-2.jpg"
            alt="Nutrition Coaching at Cort Fitness Etobicoke"
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
              Nutrition Coaching
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Learn how to fuel your body properly to support your training, build muscle, lose fat, and reach your fitness goals faster. Our nutrition coaching provides the guidance and accountability you need for lasting results.
            </p>
            <CTAButton>Start Your Transformation</CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Nutrition Coaching?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You can&apos;t out-train a bad diet. Get the nutrition guidance you need to maximize your results.
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What&apos;s Included
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"
                  alt="Nutrition coaching consultation at Cort Fitness"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Nutrition Coaching FAQs
            </h2>
            <div className="space-y-6">
              {nutritionFaqs.map((faq, index) => (
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
                <p className="text-sm text-muted-foreground mt-1">Combine nutrition with expert training</p>
              </Link>
              <Link href="/programs/group-classes" className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Group Classes</h3>
                <p className="text-sm text-muted-foreground mt-1">Fuel your group workouts properly</p>
              </Link>
              <Link href="/programs/hyrox-training" className="group p-4 bg-white rounded-xl hover:shadow-lg transition-all">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">HYROX Training</h3>
                <p className="text-sm text-muted-foreground mt-1">Race-day nutrition strategies</p>
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
