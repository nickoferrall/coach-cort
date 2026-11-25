import { Facility } from "@/components/facility";
import { Card, CardContent } from "@/components/ui/card";

export function FacilitySection() {
  return (
    <section id="facility" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Cort Fitness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your home for personal training in Etobicoke
            </p>
          </div>

          <Card className="border border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At Cort Fitness, our mission is to help you{" "}
                  <span className="font-bold text-foreground">build muscle</span>,{" "}
                  <span className="font-bold text-foreground">lose fat</span>, and{" "}
                  <span className="font-bold text-foreground">become the strongest version of yourself</span>.
                </p>
                <p>
                  Founded by Andrew Cortellessa, Cort Fitness is Etobicoke&apos;s premier personal training gym. We offer customized training programs specific to your goals, whether you&apos;re looking to lose weight, build strength, or prepare for competitions like HYROX.
                </p>
                <p>
                  Cort Fitness is operated by 1001004437 ONTARIO INC.
                </p>
                <p>
                  Our team of certified trainers brings expertise in personal training, yoga, HIIT, pilates, and physiotherapy. We create a supportive, motivating environment where you&apos;ll be pushed to achieve results you never thought possible.
                </p>
                <p className="font-semibold text-foreground text-xl pt-4">
                  Book your free assessment today and start your transformation journey!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Facility />
      </div>
    </section>
  );
}
