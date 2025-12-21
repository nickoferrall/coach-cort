"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const videoTestimonials = [
  { id: "1005835180", title: "Client Transformation Story" },
  { id: "1010674731", title: "Personal Training Results" },
  { id: "844664636", title: "Fitness Journey" },
]

const testimonials = [
  {
    text: "Just wanted to say a quick thank you. From meeting you at the gym about a year ago to now has been quite the journey! I saw a picture of myself one day and did not recognize the person looking back at me. Coach Cort has completely transformed my approach to fitness.",
    author: "Stella D'Silva",
    source: "google",
  },
  {
    text: "Andrew 'Coach Cort' is truly a one of a kind trainer, coach, and great person. I've been part of his training for 3 or so years now and it's been life changing in all the right ways. Over the first 6 months I saw incredible results and have maintained them since.",
    author: "Mike",
    source: "google",
  },
  {
    text: "I have been working out with personal trainers on and off for over 20 years now. There are two things I know for sure. I never work out as consistently or with as much intensity on my own. Coach Cort pushes me to be my best every single session.",
    author: "Dawn",
    source: "google",
  },
  {
    text: "The personal training at Cort Fitness is exceptional. The trainers really take the time to understand your goals and create a customized program. I've never felt stronger or more confident in my fitness journey.",
    author: "Jason Chow",
    source: "google",
  },
  {
    text: "Best decision I ever made was joining Cort Fitness. The group classes are challenging but so motivating. The community here is incredible and everyone supports each other. Highly recommend!",
    author: "Crystal McAfee",
    source: "google",
  },
  {
    text: "Coach Cort and his team provide world-class personal training. The attention to detail, the customized programs, and the results speak for themselves. If you're serious about transforming your body, this is the place.",
    author: "Archie",
    source: "google",
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a community that supports and motivates each other every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-[9/16] bg-slate-900"
            >
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?background=0&autoplay=0&loop=0&byline=0&title=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/60 via-slate-50/40 to-emerald-100/50 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] opacity-60" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.source === "google" && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                      </svg>
                      <span>Google</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-foreground text-sm">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
