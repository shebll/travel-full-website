import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <main className="pt-[77px]">
      <Hero />
      <Slider />
    </main>
  );
}
