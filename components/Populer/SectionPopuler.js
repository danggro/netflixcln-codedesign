import Button from "../Button";
import Container from "../Container";
import CardPopuler from "./CardPopuler";
import Populer1 from "@/public/populer/Peaky.png";
import Populer2 from "@/public/populer/Spderman.png";
import Populer3 from "@/public/populer/LoL.png";
import Populer4 from "@/public/populer/Joker.png";

export default function SectionPopuler() {
  return (
    <section className="pt-[180px]">
      <Container>
        <div className="flex items-end justify-between mb-8">
          <div className="w-4/12">
            <h2 className="text-title font-volkhov">
              Film dan Acara TV Populer Bulan Ini
            </h2>
          </div>
          <div className="flex-shrink-0 ">
            <Button>Lihat Semua</Button>
          </div>
        </div>
        <div className="flex gap-9">
          <CardPopuler
            src={Populer1}
            alt="Populer1"
            title="Peaky Blinders"
            cat="Crime, Drama"
            rating="8.8"
          />
          <CardPopuler
            src={Populer2}
            alt="Populer2"
            title="Spider-Man: No Way Home"
            cat="Action, Adventure, Fantasy"
            rating="8.8"
          />
          <CardPopuler
            src={Populer3}
            alt="Populer3"
            title="Arcane: League of Legends"
            cat="Animation, Action, Adventure"
            rating="9.2"
          />
          <CardPopuler
            src={Populer4}
            alt="Populer4"
            title="Joker"
            cat="Crime, Drama, Thriller"
            rating="8.4"
          />
        </div>
      </Container>
    </section>
  );
}
