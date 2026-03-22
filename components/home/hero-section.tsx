import Image from "next/image";
import HeroSectionClient from "./hero-section-client";

export default function HeroSection() {
  return (
    <section className="relative h-[65vh] sm:h-[85vh] flex items-center justify-center bg-gradient-to-b from-background to-muted pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-[0.5px] z-10" />

        <Image
          src="/hero-bg.jpeg"
          alt="Elegance Inspired Team"
          fill
          priority
          sizes="100vw"
          className="hidden sm:block object-cover object-center"
        />

        <Image
          src="/hero-mob.jpeg"
          alt="Elegance Inspired Team"
          fill
          priority
          sizes="100vw"
          className="block sm:hidden object-cover object-center"
        />
      </div>

      <HeroSectionClient />
    </section>
  );
}
