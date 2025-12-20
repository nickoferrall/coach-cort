import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Testimonials - Cort Fitness Etobicoke",
  description:
    "Read testimonials from Cort Fitness members in Etobicoke. See how Coach Cort has helped clients transform their bodies and lives.",
  openGraph: {
    title: "Testimonials - Cort Fitness Etobicoke",
    description:
      "Read testimonials from Cort Fitness members in Etobicoke. See how Coach Cort has helped clients transform their bodies and lives.",
    url: "https://coachcort.com/testimonials",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/strength-training-in-Etobicoke-279572.jpg"],
  },
};

export default function TestimonialsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
