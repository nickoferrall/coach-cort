import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "About Us - Cort Fitness Etobicoke",
  description:
    "Learn about Cort Fitness in Etobicoke, Ontario. Coach Cort delivers high-quality personal training to help you lose weight, build muscle, and transform your life.",
  alternates: {
    canonical: "https://coachcort.com/about",
  },
  openGraph: {
    title: "About Us - Cort Fitness Etobicoke",
    description:
      "Learn about Cort Fitness in Etobicoke, Ontario. Coach Cort delivers high-quality personal training to help you lose weight, build muscle, and transform your life.",
    url: "https://coachcort.com/about",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
};

export default function AboutPage() {
  return <HomeContent scrollTo="facility" />;
}
