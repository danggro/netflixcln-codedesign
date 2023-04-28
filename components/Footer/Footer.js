import Link from "next/link";
import Container from "../Container";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";
import Sosmed from "./Sosmed";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Twittere from "./Icon/Twitter";
import Image from "next/image";
import AppStore from "@/public/footer/AppStore.png";
import GooglePlay from "@/public/footer/GooglePlay.png";
import LogoFooter from "./LogoFooter";

export default function Footer() {
  return (
    <footer className="pt-[180px] mb-12">
      <Container>
        <div className="flex justify-between">
          <div className="w-[290px]">
            <div className="w-[133px]">
              <LogoFooter />
            </div>
            <p className="mt-6 font-light text-detail">
              Layanan streaming tanpa iklan dan harga bulanan yang murah
            </p>
          </div>
          <ItemFooter title="Perusahaan">
            <ul className="mt-8 space-y-4">
              <li>
                <LinkFooter href="/">Tentang Kami</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Hubungi Kami</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Karir</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Blog</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Investors Relations</LinkFooter>
              </li>
            </ul>
          </ItemFooter>
          <ItemFooter title="Dapatkan Bantuan">
            <ul className="mt-8 space-y-4">
              <li>
                <LinkFooter href="/">FAQ</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Pusat Bantuan</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Akun</LinkFooter>
              </li>
            </ul>
          </ItemFooter>
          <ItemFooter title="Lainnya">
            <ul className="mt-8 space-y-4">
              <li>
                <LinkFooter href="/">Tukar Kartu Hadiah</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Netflix Original</LinkFooter>
              </li>
              <li>
                <LinkFooter href="/">Media Center</LinkFooter>
              </li>
            </ul>
          </ItemFooter>
          <ItemFooter title="Dapatkan Aplikasi Kami">
            <div className="flex gap-4 mt-8">
              <Link href={"/"}>
                <Image src={AppStore} alt="AppStore" />
              </Link>
              <Link href={"/"}>
                <Image src={GooglePlay} alt="GooglePlay" />
              </Link>
            </div>
            <div className="flex gap-6 mt-10">
              <Sosmed href="/">
                <Facebook />
              </Sosmed>
              <Sosmed href="/">
                <Instagram />
              </Sosmed>
              <Sosmed href="/">
                <Twittere />
              </Sosmed>
            </div>
          </ItemFooter>
        </div>
        <div className="flex justify-between mt-10">
          <p className="font-light text-detail">
            &copy; 2022 Hak Cipta Terpelihara oleh Netflix Indonesia
          </p>
          <ul className="flex gap-6 ">
            <li>
              <LinkFooter href="/">Persyaratan Layanan</LinkFooter>
            </li>
            <li>
              <LinkFooter href="/">Kebijakan Privasi</LinkFooter>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
