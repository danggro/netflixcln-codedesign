import Container from "../Container";
import CardPaket from "./CardPaket";
import ItemPaket from "./ItemPaket";

export default function SectionPaket() {
  return (
    <section className="pt-[180px]">
      <Container>
        <h2 className="w-5/12 mx-auto text-center text-title font-volkhov">
          Pilih Paket yang Cocok Untukmu
        </h2>
        <div className="flex gap-10 mt-6">
          <CardPaket paket="Basic" harga="120,000">
            <ItemPaket checklist>Ponsel, Tablet, Komputer, TV</ItemPaket>
            <ItemPaket checklist>No Ads</ItemPaket>
            <ItemPaket checklist>Batalkan Kapan Saja</ItemPaket>
            <ItemPaket checklist>Kualitas Video Baik</ItemPaket>
            <ItemPaket checklist>Resolusi 480p</ItemPaket>
            <ItemPaket>Resolusi 720p</ItemPaket>
            <ItemPaket>Resolusi 1080p</ItemPaket>
            <ItemPaket>Resolusi 4K+HDR</ItemPaket>
          </CardPaket>
          <CardPaket paket="Standart" harga="153,000">
            <ItemPaket checklist>Ponsel, Tablet, Komputer, TV</ItemPaket>
            <ItemPaket checklist>No Ads</ItemPaket>
            <ItemPaket checklist>Batalkan Kapan Saja</ItemPaket>
            <ItemPaket checklist>Kualitas Video Baik</ItemPaket>
            <ItemPaket checklist>Resolusi 480p</ItemPaket>
            <ItemPaket checklist>Resolusi 720p</ItemPaket>
            <ItemPaket checklist>Resolusi 1080p</ItemPaket>
            <ItemPaket>Resolusi 4K+HDR</ItemPaket>
          </CardPaket>
          <CardPaket paket="Premium" harga="186,000">
            <ItemPaket checklist>Ponsel, Tablet, Komputer, TV</ItemPaket>
            <ItemPaket checklist>No Ads</ItemPaket>
            <ItemPaket checklist>Batalkan Kapan Saja</ItemPaket>
            <ItemPaket checklist>Kualitas Video Baik</ItemPaket>
            <ItemPaket checklist>Resolusi 480p</ItemPaket>
            <ItemPaket checklist>Resolusi 720p</ItemPaket>
            <ItemPaket checklist>Resolusi 1080p</ItemPaket>
            <ItemPaket checklist>Resolusi 4K+HDR</ItemPaket>
          </CardPaket>
        </div>
      </Container>
    </section>
  );
}
