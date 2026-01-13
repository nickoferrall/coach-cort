"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"

interface RequestInfoButtonProps {
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
}

export function RequestInfoButton({
  variant = "default",
  size = "lg",
  className,
  children = "Request More Info",
}: RequestInfoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsModalOpen(true)}
      >
        {children}
      </Button>
      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
