import { Dumbbell, Users, GraduationCap, Heart, Trophy, Zap } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "One-on-one customized programs to help you build muscle, lose fat, and achieve your specific goals",
  },
  {
    icon: Users,
    title: "Group Fitness Classes",
    description: "HIIT, yoga, pilates, and strength classes led by certified instructors in a motivating environment",
  },
  {
    icon: GraduationCap,
    title: "Youth Group Training",
    description: "Specialized programs for young athletes to build strength, coordination, and healthy habits",
  },
  {
    icon: Trophy,
    title: "HYROX Training",
    description: "Prepare for HYROX competitions with specialized training for running and functional fitness",
  },
  {
    icon: Heart,
    title: "On-Site Physio",
    description: "Access to physiotherapy services to help you move well and stay injury-free",
  },
  {
    icon: Zap,
    title: "Nutrition Coaching",
    description: "Learn how to fuel your body properly to support your training and reach your goals faster",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your body and become the strongest version of yourself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
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
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
