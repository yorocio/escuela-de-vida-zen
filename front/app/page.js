import BookSession from "@/components/BookSession";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services/Services";
import { auth } from "@/auth";
import ButtonLogin from "@/components/Buttons/ButtonLogin";
import Mp from "@/components/Mp";

export default async function Home() {

  const session = await auth();
  //console.log(session); 

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section>
        <ButtonLogin session={session}></ButtonLogin>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <BookSession />
      </section>
      <section>
        <Mp />
      </section>
    </main>
  );
}
