"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"
          alt="Cort Fitness Personal Training Gym in Etobicoke"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            Etobicoke&apos;s Best Personal Training Experience
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Customized training specific to your goals. Build muscle, lose fat, and become the strongest version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://get.mndbdy.ly/LsyZCRTR3Xb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                Book Class
              </Button>
            </a>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              Request More Info
            </Button>
          </div>
        </div>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}
