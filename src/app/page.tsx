import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { TrustBar } from '@/components/TrustBar';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Tests } from '@/components/Tests';
import { Comparison } from '@/components/Comparison';
import { Testimonials } from '@/components/Testimonials';
import { ForTherapists } from '@/components/ForTherapists';
import { BetaWaitlist } from '@/components/BetaWaitlist';
import { FAQ } from '@/components/FAQ';
import { DownloadCTA } from '@/components/DownloadCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Tests />
      <Comparison />
      <Testimonials />
      <ForTherapists />
      <section id="bekleme">
        <BetaWaitlist />
      </section>
      <FAQ />
      <DownloadCTA />
    </>
  );
}
