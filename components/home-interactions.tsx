"use client"

import { useEffect, useState } from "react"
import { BookingModal } from "@/components/booking-modal"

interface HomeInteractionsProps {
  scrollTo?: string
}

export function HomeInteractions({ scrollTo }: HomeInteractionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [scrollTo])

  return (
    <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Information" />
  )
}
