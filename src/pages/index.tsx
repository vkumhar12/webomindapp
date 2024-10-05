import { DisturbAndMange, HeroSection, LoremSection } from "@/components";
import PublicLayout from "@/layout";

export default function Home() {
  return (
    <PublicLayout>
      <section className="main-container flex flex-col gap-10 max-w-7xl">
        <HeroSection />

        <DisturbAndMange />
        <LoremSection />
      </section>
    </PublicLayout>
  );
}
