import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle'
import Skills from '@/components/ui/Skills'

export default function Home() {
  
  return (
    <main className="p-20 bg-body">
      <HeroSection />
      <Skills />
    </main>
  );
}
