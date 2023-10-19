"use client";
import React from "react";
import FeatureTitle from "./FeatureTitle";
import { Extend, Friendly, Make } from "./FeatureCard";

const featureData = [
  {
    title: "Friendly Test",
    paragraph:
      "The best products are built with hard work by harmonious teams.Designed to de-risk the process of engaging a new team, the test gives both sides a chance to impress..Typically 40 hours across 12 weeks, well work with you on a product audit, new feature, or visual refresh before agreeing a longer term  partnership.",
    imageUrl: "/images/about1.jpg",
    card: Friendly,
    id: "Friendly",
  },
  {
    title: "Extend your team",
    paragraph:
      "The best products are built with hard work by harmonious teams..Instantly extend your team with design and engineering expertise, bypassing hiring challenges and risk. We use industry leading tools, efficient processes, and work like we’re part of your in-house team.",
    imageUrl: "/images/about2.jpg",
    card: Extend,
    id: "Extend",
  },
  {
    title: "Make progress",
    paragraph:
      "Weekly sprints, comms in Slack, fast iteration. We’re comfortable helping you find product-market fit, establish your brand and develop your product as your business and user needs evolve over time..Our contracts are built around flexible retainers so we can scale with you as we develop your product.",
    imageUrl: "/images/about3.jpg",
    card: Make,
    id: "Make",
  },
];
export default function Feature() {
  return (
    <section className="flex gap-[100px] container mx-auto pt-20">
      <div className="sticky top-0 h-screen w-full flex items-center">
        <div className="relative w-full rounded-[40px] aspect-square bg-gray-300 ">
          {featureData.map((feature, index) => (
            <feature.card id={feature.id} key={index} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-start flex-col max-w-[50%] py-[40vh]">
        {featureData.map((feature, index) => (
          <FeatureTitle
            key={index}
            title={feature.title}
            paragraph={feature.paragraph}
            index={index}
            id={feature.id}
          />
        ))}
      </div>
    </section>
  );
}
