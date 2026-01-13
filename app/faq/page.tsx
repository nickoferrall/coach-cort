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
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What programs does Cort Fitness offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cort Fitness offers personal training, group fitness classes, youth group training, and specialized HYROX competition training. All our programs are designed to help you build muscle, lose fat, and achieve your fitness goals with expert guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a complimentary fitness assessment for all new clients. During your free assessment, we'll discuss your goals, evaluate your current fitness level, and create a personalized plan to help you succeed.",
      },
    },
    {
      "@type": "Question",
      name: "What is HYROX training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HYROX is the world's largest fitness race, combining 8km of running with 8 functional workout stations including sled pushes, rowing, wall balls, and more. Our HYROX training program prepares you to compete at any level.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the trainers at Cort Fitness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team includes Andrew Cortellessa (Owner & Personal Trainer), Joseph El-Achhab (Yoga, HIIT & Pilates Instructor), Taya Smith (Personal Trainer & Nutrition Coach), and Adam Chang (On-Site Physio Coach).",
      },
    },
    {
      "@type": "Question",
      name: "Where is Cort Fitness located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cort Fitness is located at 313 Evans Avenue in Etobicoke, Ontario M8Z 1K2. We're easily accessible and have convenient parking.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours of operation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open Monday through Friday from 6:00 AM to 9:00 PM, Saturday from 8:00 AM to 4:00 PM, and Sunday from 9:00 AM to 2:00 PM.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeContent scrollTo="faq" />
    </>
  );
}
