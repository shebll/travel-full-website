import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Feature from "@/components/Feature/Feature";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <main className="pt-[77px]">
      <Hero />
      <Card />
      <Slider />
      <Feature />
      <div className="h-screen"></div>
    </main>
  );
}
