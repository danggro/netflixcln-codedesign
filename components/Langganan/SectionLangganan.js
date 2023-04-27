import Button from "../Button";
import Container from "../Container";
import Send from "./Send";

export default function SectionLangganan() {
  return (
    <section className="pt-[180px]">
      <Container>
        <div className="rounded-[30px] bg-[#C8CFEC] py-12 text-center justify-center relative">
          <h3 className="mb-6 text-xl font-semibold w-6/12 mx-auto text-[#1A1C22]">
            Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota
            Kami
          </h3>
          <div className="flex justify-center gap-6 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-[9px]  w-[345px] outline-none hover:outline-[#1A1C22] rounded-[15px]"
            />
            <Button>Berlangganan</Button>
          </div>
          <div className="absolute -top-5 -right-5">
            <Send />
          </div>
        </div>
      </Container>
    </section>
  );
}
