import Image from "next/image";
import Container from "../Container";
import TontonPic from "@/public/Tonton.png";

export default function SectionTonton(props) {
  return (
    <section className="pt-[180px]">
      <Container>
        <div className="flex items-center">
          <div className="relative w-6/12">
            <Image src={TontonPic} alt="TontonPic" />
            <div className="absolute left-[121px] top-0 w-[500px] h-[500px] tonton-circle rounded-full -z-10"></div>
          </div>
          <div className="w-6/12">
            <h2 className="pl-[70px] text-[40px] flex justify-end font-volkhov font-bold leading-[72px]">
              Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
