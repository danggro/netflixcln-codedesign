import Link from "next/link";

export default function Sosmed(props) {
  return (
    <Link
      href={props.href}
      className="w-12 h-12 rounded-full grid place-items-center hover:bg-[#BC0E19] shadow-[0px_2px_10px_0_rgba(64,67,78,0.2)]"
    >
      {props.children}
    </Link>
  );
}
