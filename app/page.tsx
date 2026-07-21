import AboutUs from "@/components/section/AboutUs";
import Clients from "@/components/section/Clients";
import ContactNow from "@/components/section/ContactNow";
import Hero from "@/components/section/Hero";
import SomeWork from "@/components/section/SomeWork";
import VisionMission from "@/components/section/VisionMission";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <VisionMission />
      <SomeWork />
      <Clients />
      {/* <Testimonial /> */}
      <ContactNow />
    </main>
  );
}
