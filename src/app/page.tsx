import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Location } from "@/components/location/Location";
import { Contact } from "@/components/contact/Contact";
import { GLOBAL } from "@/design-system/classes";

export default function Home() {
  return (
    <main className={GLOBAL.mainWrapper}>
      <Hero />
      <Services />
      <About />
      <Location />
      <Contact />
    </main>
  );
}
