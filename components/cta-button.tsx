"use client"

import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  children: React.ReactNode
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function CTAButton({ children, size = "lg", className = "" }: CTAButtonProps) {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      size={size}
      className={`bg-primary hover:bg-primary/90 text-primary-foreground ${className}`}
      onClick={scrollToForm}
    >
      {children}
    </Button>
  )
}
