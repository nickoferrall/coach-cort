import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Classes } from "@/components/classes"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { EventBanner } from "@/components/event-banner"
import { FacilitySection } from "@/components/facility-section"
import { FAQ } from "@/components/faq"
import { Schedule } from "@/components/schedule"
import { Hiring } from "@/components/hiring"
import { Footer } from "@/components/footer"
import { HomeInteractions } from "@/components/home-interactions"

interface HomeContentProps {
  scrollTo?: string
}

export function HomeContent({ scrollTo }: HomeContentProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EventBanner />
      <CtaBanner />
      <Classes />
      <Schedule />
      <Services />
      <Team />
      <Hiring />
      <Testimonials />
      <FAQ />
      <FacilitySection />
      <Footer />
      <HomeInteractions scrollTo={scrollTo} />
    </main>
  )
}

