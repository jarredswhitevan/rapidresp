import { Benefits } from '@/components/Benefits';
import { ContactForm } from '@/components/ContactForm';
import { FAQ } from '@/components/FAQ';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Problem } from '@/components/Problem';
import { Services } from '@/components/Services';
import { Solution } from '@/components/Solution';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Services />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
