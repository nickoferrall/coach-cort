import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "FAQ - Cort Fitness Etobicoke",
  description:
    "Frequently asked questions about Cort Fitness in Etobicoke. Learn about personal training, group classes, HYROX training, and more.",
  alternates: {
    canonical: "https://coachcort.com/faq",
  },
  openGraph: {
    title: "FAQ - Cort Fitness Etobicoke",
    description:
      "Frequently asked questions about Cort Fitness in Etobicoke. Learn about personal training, group classes, HYROX training, and more.",
    url: "https://coachcort.com/faq",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/strength-training-in-Etobicoke-279572.jpg"],
  },
};

export default function FAQPage() {
  return <HomeContent scrollTo="faq" />;
}
