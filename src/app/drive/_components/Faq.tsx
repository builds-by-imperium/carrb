"use client";
import { useState } from "react";
import FaqQuestions from "./FaqQuestions";
import CtaSoild from "@/app/components/btn/CtaSolid";
import Link from "next/link";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="px-[6%] md:px-[4%] lg:px-[8%] md:h-screen flex flex-col justify-center items-center">
      <h2 className="capitalize font-semibold max-md:text-[24px] text-[36px]">
        Frequently asked questions
      </h2>

      {[
        {
          title:
            "How does Carrb handle customer feedback about safety concerns?",
          text: "Pick up your passenger and drive to their destination seamlessly...",
        },
        {
          title: "How do I know the driver assigned to me is verified?",
          text: "All Carrb drivers undergo identity verification...",
        },
        {
          title: "What should I do if I forget something inside the car?",
          text: "Go to the 'Ride History' section and tap 'Report Lost Item'...",
        },
        {
          title: "Can I cancel a ride after requesting it?",
          text: "Yes, but cancellation fees may apply...",
        },
        {
          title: "Does Carrb support cashless payments?",
          text: "Yes. Carrb supports multiple payment options...",
        },
      ].map((item, i) => (
        <FaqQuestions
          key={i}
          title={item.title}
          text={item.text}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
      <Link href="/faq">
        <CtaSoild text="View More" />
      </Link>
    </section>
  );
};

export default Faq;
