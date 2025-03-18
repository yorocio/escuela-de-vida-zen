import BookSession from "@/components/BookSession";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div>
        <Navbar />
      </div>
      <HeroSection />

      <section className="my-10">
        <Services />
      </section>

      <section className="my-4">
        <BookSession />
      </section>
    </main>
  );
}
