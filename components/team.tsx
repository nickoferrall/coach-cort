"use client"

import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Andrew Cortellessa",
    role: "Owner & Personal Trainer",
    image: "https://res.cloudinary.com/display97/image/upload/w_400,h_500,c_fill,g_face/7071/Andrew-Cortellessa-262660.jpg",
    bio: "Build muscle, lose fat, and learn how to keep it off. Andrew is a personal trainer based in Etobicoke with years of experience helping clients achieve their fitness goals.",
  },
  {
    name: "Joseph El-Achhab",
    role: "Yoga, HIIT & Pilates Instructor",
    image: "https://res.cloudinary.com/display97/image/upload/w_400,h_500,c_fill,g_face/7071/Joseph-El-Achhab-289155.jpg",
    bio: "Joe is a yoga, handstand, arm-balance, and HIIT Pilates instructor with a passion for guiding people in movement since 2021.",
  },
  {
    name: "Taya Smith",
    role: "Personal Trainer",
    image: "https://res.cloudinary.com/display97/image/upload/w_400,h_500,c_fill,g_face/7071/Taya-Smith-289159.jpg",
    bio: "Taya is a certified personal trainer and holistic nutrition coach dedicated to helping clients develop a healthy relationship with food, fitness, and their bodies.",
  },
  {
    name: "Adam Chang, MScPT",
    role: "On-Site Physio Coach",
    image: "https://res.cloudinary.com/display97/image/upload/w_400,h_500,c_fill,g_face/7071/Adam-Chang-MScPT-289160.jpg",
    bio: "Adam is a registered physiotherapist, performance coach, and movement enthusiast with a deep passion for helping people move well and live pain-free.",
  },
]

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated staff brings experience, passion, and expertise to help you and your family achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[1px] opacity-70" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
