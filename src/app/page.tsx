import { Hero } from '@/components/hero/Hero';
import { Services } from '@/components/services/Services';
import { About } from '@/components/about/About';
import { Location } from '@/components/location/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Location />
    </main>
  );
}
