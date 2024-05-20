import performanceImg from '@/../public/performance.jpg';
import Hero from '@/components/hero';

export default function PerformancePage() {
  return (
    <Hero
      imagData={performanceImg}
      imgAlt="Welding"
      title="We serve high performance applications"
    />
  );
}
