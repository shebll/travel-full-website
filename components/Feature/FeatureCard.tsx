import Image from "next/image";
import React from "react";
import { useFeatureStore } from "./Store";
type props = {
  children: React.ReactNode;
} & CardProps;
type CardProps = {
  id: string;
};
function FeatureCard({ children, id }: props) {
  const idFeatureInView = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={`absolute inset-0 transition-all ${
        idFeatureInView === id ? "opacity-1" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
export function Friendly({ id }: CardProps) {
  return (
    <FeatureCard id={id}>
      <Image
        className="rounded-[40px]  shadow-xl"
        src={"/images/about1.jpg"}
        alt={"about images"}
        width={1000}
        height={1000}
      />
    </FeatureCard>
  );
}
export function Make({ id }: CardProps) {
  return (
    <FeatureCard id={id}>
      <Image
        className="rounded-[40px]  shadow-xl"
        src={"/images/about3.jpg"}
        alt={"about images"}
        width={1000}
        height={1000}
      />
    </FeatureCard>
  );
}
export function Extend({ id }: CardProps) {
  return (
    <FeatureCard id={id}>
      <Image
        className="rounded-[40px]  shadow-xl"
        src={"/images/about2.jpg"}
        alt={"about images"}
        width={1000}
        height={1000}
      />
    </FeatureCard>
  );
}
