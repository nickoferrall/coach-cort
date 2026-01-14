"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What programs does Cort Fitness offer?",
    answer:
      "Cort Fitness offers personal training, group fitness classes, youth group training, and specialized HYROX competition training. All our programs are designed to help you build muscle, lose fat, and achieve your fitness goals with expert guidance.",
  },
  {
    question: "Do you offer a free assessment?",
    answer:
      "Yes! We offer a complimentary fitness assessment for all new clients. During your free assessment, we'll discuss your goals, evaluate your current fitness level, and create a personalized plan to help you succeed. It's the perfect way to see if Cort Fitness is right for you.",
  },
  {
    question: "What is HYROX training?",
    answer:
      "HYROX is the world's largest fitness race, combining 8km of running with 8 functional workout stations including sled pushes, rowing, wall balls, and more. Our HYROX training program prepares you to compete at any level, whether you're a first-timer or looking to improve your time.",
  },
  {
    question: "Who are the trainers at Cort Fitness?",
    answer:
      "Our team includes Andrew Cortellessa (Owner & Personal Trainer), Joseph El-Achhab (Yoga, HIIT & Pilates Instructor), Taya Smith (Personal Trainer & Nutrition Coach), and Adam Chang (On-Site Physio Coach). Each trainer brings unique expertise to help you reach your goals.",
  },
  {
    question: "Where is Cort Fitness located?",
    answer:
      "Cort Fitness is located at 313 Evans Avenue in Etobicoke, Ontario M8Z 1K2. We're easily accessible and have convenient parking. Stop by for a tour and see our facility for yourself!",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We're open Monday through Friday from 6:00 AM to 9:00 PM, Saturday from 8:00 AM to 4:00 PM, and Sunday from 9:00 AM to 2:00 PM. Contact us to schedule your free assessment at a time that works for you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-foreground md:text-left">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-primary transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-primary transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p className="pt-2">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
