import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <Link href={props.href} className="text-secondary hover:underline">
      {props.children}
    </Link>
  );
}
