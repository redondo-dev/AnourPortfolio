import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="font-inter">
      <Navigation />
      <Hero />
      <Timeline />
      <Vision />
      <Contact />
    </div>
  );
};

export default Index;