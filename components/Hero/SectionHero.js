import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import HeroPic from "@/public/Img-hero.png";

export default function SectionHero() {
  return (
    <section className="pt-12">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <h1 className="font-volkhov text-[56px] ">
              Nikmati Tontonan Dimana Saja, dan Kapan Saja
            </h1>
            <p className="pr-5 mt-3 mb-6 text-secondary">
              Tonton apa saja secara online dari komputer pribadi atau di
              perangkat yang terhubung ke Internet dan mendukung aplikasi
              Netflix, dan gunakan download untuk menonton saat kamu di
              perjalanan dan tidak punya koneksi Internet.
            </p>
            <Button>Daftar Sekarang</Button>
          </div>
          <div className="flex justify-end w-6/12">
            <Image src={HeroPic} alt="HeroPic" />
          </div>
        </div>
      </Container>
    </section>
  );
}
