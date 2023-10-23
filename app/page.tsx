import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Feature from "@/components/Feature/Feature";
import Card from "@/components/Card/Card";
import TextAnimation from "@/components/TextAnimation/TextAnimation";
import TapsSection from "@/components/TapsSection/TapsSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="pt-[77px] ">
      <Hero />
      <Card />
      <Slider />
      <Feature />
      <TextAnimation />
      <TapsSection />
      <div className="h-screen"></div>
    </main>
  );
}
