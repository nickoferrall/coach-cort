import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials - Cort Fitness Etobicoke",
  description:
    "Read reviews and testimonials from Cort Fitness members in Etobicoke. See what our clients have to say about their transformation with Coach Cort.",
  alternates: {
    canonical: "https://coachcort.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials - Cort Fitness Etobicoke",
    description:
      "Read reviews and testimonials from Cort Fitness members in Etobicoke. See what our clients have to say about their transformation with Coach Cort.",
    url: "https://coachcort.com/reviews",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
