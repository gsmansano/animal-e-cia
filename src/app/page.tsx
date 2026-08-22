import { Hero } from '@/components/hero/Hero';
import { Services } from '@/components/services/Services';
import { About } from '@/components/about/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
    </main>
  );
}
