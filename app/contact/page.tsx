import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Contact Us - Cort Fitness Etobicoke",
  description:
    "Contact Cort Fitness in Etobicoke, Ontario. Get directions, phone number, and email. Visit us at 313 Evans Avenue.",
  alternates: {
    canonical: "https://coachcort.com/contact",
  },
  openGraph: {
    title: "Contact Us - Cort Fitness Etobicoke",
    description:
      "Contact Cort Fitness in Etobicoke, Ontario. Get directions, phone number, and email. Visit us at 313 Evans Avenue.",
    url: "https://coachcort.com/contact",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
