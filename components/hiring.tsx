import { Dumbbell, Hand, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const positions = [
  {
    icon: Dumbbell,
    title: "Personal Trainer",
    description:
      "Join our team and help clients reach their fitness goals with customized one-on-one training programs. Certified personal trainers with a passion for coaching are encouraged to apply.",
  },
  {
    icon: Hand,
    title: "Massage Therapist",
    description:
      "We're looking for a registered massage therapist to provide recovery and therapeutic services to our clients. Help athletes and everyday gym-goers move better and stay injury-free.",
  },
]

export function Hiring() {
  return (
    <section id="careers" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            We&apos;re <span className="text-primary">Hiring</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the Cort Fitness team. We&apos;re growing and looking for
            passionate professionals to help our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {positions.map((position, index) => {
            const Icon = position.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
              >
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {position.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`mailto:a.cortfitness@gmail.com?subject=Job Application – ${position.title}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-sm">
          Interested? Send your resume to{" "}
          <a
            href="mailto:a.cortfitness@gmail.com"
            className="text-primary hover:underline font-medium"
          >
            a.cortfitness@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
