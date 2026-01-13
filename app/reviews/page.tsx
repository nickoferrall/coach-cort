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

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cort Fitness",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "50",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Stella D'Silva" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Just wanted to say a quick thank you. From meeting you at the gym about a year ago to now has been quite the journey! Coach Cort has completely transformed my approach to fitness.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Andrew 'Coach Cort' is truly a one of a kind trainer, coach, and great person. I've been part of his training for 3 or so years now and it's been life changing. Over the first 6 months I saw incredible results.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dawn" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "I have been working out with personal trainers on and off for over 20 years now. I never work out as consistently or with as much intensity on my own. Coach Cort pushes me to be my best every single session.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jason Chow" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "The personal training at Cort Fitness is exceptional. The trainers really take the time to understand your goals and create a customized program. I've never felt stronger or more confident.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Crystal McAfee" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Best decision I ever made was joining Cort Fitness. The group classes are challenging but so motivating. The community here is incredible and everyone supports each other.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Archie" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Coach Cort and his team provide world-class personal training. The attention to detail, the customized programs, and the results speak for themselves.",
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <HomeContent scrollTo="testimonials" />
    </>
  );
}
