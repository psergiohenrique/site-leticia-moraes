import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import SubmarkStrip from "@/components/SubmarkStrip";
import Projetos from "@/components/Projetos";
import Processo from "@/components/Processo";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <SubmarkStrip />
        <Projetos />
        <Processo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
