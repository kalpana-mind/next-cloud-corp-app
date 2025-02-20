import scaleImg from '@/../public/scale.jpg';
import Hero from '@/components/hero';

export default function ScalePage() {
  return (
    <Hero
      imagData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
}
