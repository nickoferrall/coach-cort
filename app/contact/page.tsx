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
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/strength-training-in-Etobicoke-279572.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
