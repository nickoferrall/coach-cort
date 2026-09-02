"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Dumbbell, Trophy, Medal } from "lucide-react"

export function EventBanner() {
  return (
    <section id="deka" className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Upcoming Event
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                DEKA Strong at Cort Fitness
              </h2>
              <p className="flex items-center gap-2 text-lg md:text-xl text-white/90 font-semibold mb-4">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                Saturday, October 10
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                We&apos;re officially a DEKA affiliate and hosting our first ever
                DEKA Strong event, powered by Spartan. Test yourself across 10
                functional workout stations. No running required, all fitness
                levels welcome.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <Dumbbell className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-white/90 text-sm font-medium">10 workout stations</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <Trophy className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-white/90 text-sm font-medium">Global leaderboard</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <Medal className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-white/90 text-sm font-medium">Shirt &amp; finisher medal</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.spartan.com/en/race/detail/11560/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-base font-bold">
                    Get Your Tickets
                  </Button>
                </a>
              </div>
              <p className="text-white/50 text-xs mt-4">
                Tickets are purchased directly through the official Spartan website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
