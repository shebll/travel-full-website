import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Feature from "@/components/Feature/Feature";
import Card from "@/components/Card/Card";
import TextAnimation from "@/components/TextAnimation/TextAnimation";
import TapsSection from "@/components/TapsSection/TapsSection";
import Text2 from "@/components/TextAnimation/Text2";

export default function Home() {
  return (
    <main className="pt-[77px] ">
      <Hero />
      <Card />
      <Slider />
      <Feature />
      <Text2 />
      <TextAnimation />
      <TapsSection />
      <div className="h-screen"></div>
    </main>
  );
}
