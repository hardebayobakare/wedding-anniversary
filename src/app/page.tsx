import Hero from "@/components/Hero";
import PersonalMessage from "@/components/PersonalMessage";
import Timeline from "@/components/Timeline";
import Reasons from "@/components/Reasons";
import FinalNote from "@/components/FinalNote";

export default function Home() {
  return (
    <main>
      <Hero />
      <PersonalMessage />
      <Timeline />
      <Reasons />
      <FinalNote />
    </main>
  );
}
