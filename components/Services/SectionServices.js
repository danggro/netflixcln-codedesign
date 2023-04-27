import Container from "../Container";
import CardServices from "./CardServices";
import Akses from "./Icon/Akses";
import Child from "./Icon/Child";
import Download from "./Icon/Download";
import TV from "./Icon/TV";

export default function SectionServices() {
  return (
    <section className="pt-[180px]">
      <Container>
        <h1 className="w-5/12 mx-auto text-center text-title font-volkhov">
          Layanan Terbaik yang Tidak Mengecewakan
        </h1>
        <div className="flex justify-between gap-10 mt-6">
          <CardServices
            icon={<TV />}
            title="Tonton Langsung di TV"
            desc="Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi"
          />
          <CardServices
            icon={<Download />}
            title="Download untuk Offlane"
            desc="Simpan dengan mudah agar selalu ada acara TV dan film yang bisa ditonton"
          />
          <CardServices
            icon={<Akses />}
            title="Akses berbagai perangkat"
            desc="Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu"
          />
          <CardServices
            icon={<Child />}
            title="Buat profil untuk anak"
            desc="Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak "
          />
        </div>
      </Container>
    </section>
  );
}
