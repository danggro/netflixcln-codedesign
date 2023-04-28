import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import SectionLangganan from "@/components/Langganan/SectionLangganan";
import NavBar from "@/components/Navigation/NavBar";
import SectionPaket from "@/components/Paket/SectionPaket";
import SectionPopuler from "@/components/Populer/SectionPopuler";
import SectionServices from "@/components/Services/SectionServices";
import SectionTonton from "@/components/Tonton/SectionTonton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionServices />
      <SectionTonton />
      <SectionPopuler />
      <SectionPaket />
      <SectionLangganan />
      <Footer />
    </>
  );
}
