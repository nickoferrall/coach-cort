import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { RequestInfoButton } from "@/components/request-info-button"

export const metadata: Metadata = {
  title: "HYROX Training in Etobicoke & Toronto | Cort Fitness - Competition Prep",
  description:
    "Prepare for HYROX competitions with specialized training at Cort Fitness in Etobicoke. Expert coaching for running, sled pushes, wall balls, rowing, and all 8 workout stations. Join Etobicoke's HYROX community.",
  keywords: [
    "HYROX training Etobicoke",
    "HYROX Toronto",
    "HYROX preparation",
    "HYROX coaching",
    "functional fitness Etobicoke",
    "running training Etobicoke",
    "sled push training",
    "wall ball training",
    "HYROX competition prep",
    "fitness racing Toronto",
  ],
  alternates: {
    canonical: "https://coachcort.com/programs/hyrox-training",
  },
  openGraph: {
    title: "HYROX Training in Etobicoke & Toronto | Cort Fitness",
    description:
      "Prepare for HYROX competitions with specialized training at Cort Fitness. Expert coaching for all 8 workout stations.",
    url: "https://coachcort.com/programs/hyrox-training",
    images: [
      {
        url: "/hyrox-sled.webp",
        width: 1200,
        height: 630,
        alt: "HYROX Training at Cort Fitness Etobicoke",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYROX Training in Etobicoke & Toronto | Cort Fitness",
    description:
      "Prepare for HYROX competitions with specialized training at Cort Fitness. Expert coaching for all 8 workout stations.",
    images: ["/hyrox-sled.webp"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HYROX Training",
  provider: {
    "@type": "SportsActivityLocation",
    name: "Cort Fitness",
    url: "https://coachcort.com",
  },
  serviceType: "HYROX Competition Training",
  areaServed: [
    {
      "@type": "City",
      name: "Etobicoke",
    },
    {
      "@type": "City",
      name: "Toronto",
    },
  ],
  description:
    "Specialized training program to prepare for HYROX competitions, combining running endurance with functional fitness for all 8 workout stations.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
}

const hyroxStations = [
  {
    number: 1,
    name: "Ski Erg",
    distance: "1000m",
    description: "Upper body pulling power and cardiovascular endurance",
  },
  {
    number: 2,
    name: "Sled Push",
    distance: "50m",
    description: "Lower body strength and pushing power",
  },
  {
    number: 3,
    name: "Sled Pull",
    distance: "50m",
    description: "Full body pulling strength and grip endurance",
  },
  {
    number: 4,
    name: "Burpee Broad Jump",
    distance: "80m",
    description: "Explosive power and full body conditioning",
  },
  {
    number: 5,
    name: "Rowing",
    distance: "1000m",
    description: "Cardiovascular endurance and rowing technique",
  },
  {
    number: 6,
    name: "Farmers Carry",
    distance: "200m",
    description: "Grip strength and loaded carrying capacity",
  },
  {
    number: 7,
    name: "Sandbag Lunges",
    distance: "100m",
    description: "Lower body strength and stability under load",
  },
  {
    number: 8,
    name: "Wall Balls",
    reps: "75/100",
    description: "Full body endurance and coordination",
  },
]

const trainingIncludes = [
  "Running endurance and pacing strategy",
  "Ski erg and rowing technique",
  "Sled push and pull conditioning",
  "Wall ball efficiency training",
  "Burpee broad jump practice",
  "Farmer carry and sandbag lunges",
  "Transition training between stations",
  "Race-day strategy and mental prep",
  "Nutrition guidance for race day",
  "Mock HYROX simulations",
]

export default function HyroxTrainingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 md:pt-40 pb-16 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="py-8 lg:py-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                HYROX Training
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Prepare for the world&apos;s largest fitness race with specialized training for running and all 8 functional workout stations.
              </p>
              <RequestInfoButton className="bg-primary hover:bg-primary/90 text-primary-foreground" />
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/hyrox.jpg"
                  alt="HYROX Training at Cort Fitness"
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What is HYROX?
              </h2>
              <p className="text-lg text-muted-foreground">
                HYROX is the world&apos;s largest fitness race, combining 8km of running with 8 functional workout stations. Watch to learn more about the ultimate test of fitness.
              </p>
            </div>
            <YouTubeEmbed videoId="YN-n8t8d2bA" title="What is HYROX?" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The 8 HYROX Stations
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Between each 1km run, you&apos;ll complete one of these 8 functional workout stations. Our training program prepares you for every single one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hyroxStations.map((station) => (
                <div
                  key={station.number}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {station.number}
                    </div>
                    <h3 className="font-bold text-foreground">{station.name}</h3>
                  </div>
                  <div className="text-primary font-semibold text-sm mb-2">
                    {station.distance || station.reps}
                  </div>
                  <p className="text-muted-foreground text-sm">{station.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="/hyrox-sled.webp"
                  alt="HYROX athlete training"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our HYROX Program
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you&apos;re preparing for your first HYROX or aiming for a podium finish, our program covers everything you need to perform your best on race day.
                </p>
                <ul className="space-y-4">
                  {trainingIncludes.map((item, index) => (
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join Etobicoke&apos;s HYROX Community
              </h2>
              <p className="text-white/80 mb-6">
                Train with other HYROX athletes in the Greater Toronto Area. Our community includes beginners and experienced racers who push each other to new levels.
              </p>
              <p className="text-white/80">
                Whether you&apos;re doing your first HYROX Open or training for HYROX Pro, we have the equipment, expertise, and community to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Race HYROX?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our HYROX training program and prepare to compete in the world&apos;s fastest-growing fitness race.
          </p>
          <RequestInfoButton variant="secondary" className="bg-white text-primary hover:bg-white/90" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
