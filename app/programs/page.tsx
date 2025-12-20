import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Programs - Cort Fitness Etobicoke",
  description:
    "Explore fitness programs at Cort Fitness in Etobicoke. Personal training, group classes, youth training, and HYROX preparation for all fitness levels.",
  alternates: {
    canonical: "https://coachcort.com/programs",
  },
  openGraph: {
    title: "Programs - Cort Fitness Etobicoke",
    description:
      "Explore fitness programs at Cort Fitness in Etobicoke. Personal training, group classes, youth training, and HYROX preparation for all fitness levels.",
    url: "https://coachcort.com/programs",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/7071/strength-training-in-Etobicoke-279572.jpg"],
  },
};

export default function ProgramsPage() {
  return <HomeContent scrollTo="programs" />;
}
